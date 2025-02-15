"use client";

import { ProjectType } from "@/lib/types/project.types";
import { useLocalStorage } from "usehooks-ts";

const useProject = () => {
  const [projects, setProjects] = useLocalStorage<ProjectType[]>(
    "cosha-projects",
    []
  );

  const [selectedProjectId, setSelectedProjectId] = useLocalStorage(
    "cosha-project-id",
    ""
  );

  const selectedProject = projects?.find(
    (project) => project.id === selectedProjectId
  );

  return {
    setProjects,
    projects,
    selectedProject,
    selectedProjectId,
    setSelectedProjectId,
  };
};

export default useProject;
