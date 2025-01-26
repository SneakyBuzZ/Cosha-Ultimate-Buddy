"use client";

import { Ellipsis } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllProjects } from "@/lib/query/project.query";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { ProjectType } from "@/lib/types/project.types";
import { useRouter } from "next/navigation";
import useProject from "@/hooks/use-project";

const ProjectTable = () => {
  const { setProjects: setProjectsToHook, setSelectedProjectId } = useProject();
  const { mutateAsync: getAllProjects, isPending } = useGetAllProjects();
  const [projects, setProjects] = useState<ProjectType[] | null>(null);

  const { data } = useSession();
  const router = useRouter();

  const accessToken = data?.user?.accessToken;

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    const fetchProjects = async () => {
      const data = await getAllProjects(accessToken);
      if (data) {
        setProjects(data);
        setProjectsToHook(data);
      }
    };
    fetchProjects();
  }, [accessToken]);

  const handleSelect = (id: string) => {
    setSelectedProjectId(id);
    router.push(`/projects/${id}`);
  };

  return (
    <>
      {isPending ? (
        <>Loading</>
      ) : (
        <>
          {projects && projects.length > 0 ? (
            <>
              <Table className="border border-neutral-300 w-[95%] mt-5 ">
                <TableCaption>A list of your recent projects.</TableCaption>
                <TableHeader className="">
                  <TableRow className="h-[3rem]">
                    <TableHead className="w-16 p-3">No.</TableHead>
                    <TableHead className=" w-40 border-x border-x-neutral-300 p-3">
                      Status
                    </TableHead>
                    <TableHead className="w-[25rem] p-3">Name</TableHead>
                    <TableHead className="border-x border-x-neutral-300 p-3">
                      Collaborators
                    </TableHead>
                    <TableHead className="p-3">Project Id</TableHead>
                    <TableHead className="p-3"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((each, index) => (
                    <TableRow
                      key={each.id}
                      className="h-[3rem] cursor-pointer"
                      onClick={() => handleSelect(each.id)}
                    >
                      <TableCell className="p-3">{index + 1}</TableCell>
                      <TableCell className="border-x border-x-neutral-300 p-3">
                        FREE
                      </TableCell>
                      <TableCell className="p-3">{each.name}</TableCell>
                      <TableCell className="border-x border-x-neutral-300 p-3">
                        {each.ProjectCollaborators?.length || 0}
                      </TableCell>
                      <TableCell className="p-3">{each.id}</TableCell>
                      <TableCell className="w-5 p-3 pr-4">
                        <Ellipsis
                          size={18}
                          color="#080808"
                          className="cursor-pointer"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          ) : (
            <>No Projects</>
          )}
        </>
      )}
    </>
  );
};

export default ProjectTable;
