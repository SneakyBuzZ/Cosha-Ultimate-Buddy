"use client";

import React from "react";
import { Editor, Theme } from "@monaco-editor/react";
import { FileStructure } from "@/components/editor/FileStructure";
import { Button } from "@/components/ui/button";

const code = `
"use client";

import CommitLogs from "@/components/projects/commit-logs";
import useProject from "@/hooks/use-project";
import { fetchUserDetails, getSummarizedCommits } from "@/lib/github";
import { useGetCommitsByUrl } from "@/lib/query/github.query";
import { CommitType, RepoOwnerType } from "@/lib/types/github.types";
import React, { useEffect, useState } from "react";

const page = () => {
  const { selectedProject: project } = useProject();

  const [commits, setCommits] = useState<CommitType[]>([]);
  const [projectOwner, setProjectOwner] = useState<RepoOwnerType | null>();

  const { mutateAsync: getCommitsByUrl, isPending } = useGetCommitsByUrl();

  useEffect(() => {
    if (!project) return;

    Promise.all([getCommitsByUrl(project.url), fetchUserDetails(project.url)])
      .then(async ([commitsData, userDetails]) => {
        const summarizedCommits = await getSummarizedCommits(commitsData);
        setCommits(summarizedCommits);
        setProjectOwner(userDetails);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [project]);

  return (
    <div>
      {projectOwner && (
        <div className="w-full h-full border border-neutral-200 p-4 flex justify-between items-center shadow-sm rounded-md ">
          <div className="flex items-center gap-4">
            <img
              className="h-12 w-12 rounded-full border border-neutral-300"
              src={projectOwner.avatar}
              alt={projectOwner.name}
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-neutral-800">
                {projectOwner.name}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-neutral-600">
                  {projectOwner.bio}
                </span>
                <span className="text-sm text-neutral-600">
                  {projectOwner.location}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end text-right">
            <span className="text-sm text-neutral-600">
              Followers: {projectOwner.followers}
            </span>
            <span className="text-sm text-neutral-600">
              Following: {projectOwner.following}
            </span>
            <span className="text-sm text-neutral-600">
              Public Repos: {projectOwner.publicRepos}
            </span>
          </div>
        </div>
      )}

      <CommitLogs commits={commits} />
    </div>
  );
};

export default page;

`;

const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        options={{
          fontSize: 14,
          fontFamily: "Fira Code, monospace",
        }}
      />
      <div className="w-[30%] h-full flex flex-col justify-start items-center gap-2">
        <FileStructure />
        <div className="flex flex-col justify-start items-start p-4 gap-2">
          <div className="flex flex-col justify-start items-start gap-1 w-full">
            <h3 className="text-neutral-400">Push Code to Remote</h3>
            <p className="text-neutral-500 dark:text-neutral-600 text-xs">
              You can push the code to remote by running the following command
            </p>
          </div>
          <Button className="bg-orchid border-r-orchid-dark text-white w-full">
            Push Origin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
