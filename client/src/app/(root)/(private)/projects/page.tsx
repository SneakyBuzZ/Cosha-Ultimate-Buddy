"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import React from "react";
import ProjectTable from "@/components/table/ProjectTable";
import NewProjectModal from "@/components/modal/NewProjectModal";

const page = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start p-7 px-10 h-full">
        <div className="flex justify-between items-center w-[95%]">
          <Label className="text-2xl text-neutral-700 dark:text-neutral-500">
            Your Projects
          </Label>
          <div className="flex justify-center items-center gap-3">
            <NewProjectModal className="h-full bg-orchid border-orchid-dark hover:bg-orchid-dark p-2 px-6 rounded-md text-sm text-white">
              New Project
            </NewProjectModal>
            <Button className="h-full bg-neutral-100 border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 hover:bg-neutral-150 shadow-none text-neutral-500">
              Import Project
            </Button>
          </div>
        </div>
        <ProjectTable />
      </div>
    </>
  );
};

export default page;
