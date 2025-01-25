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
        <div className="w-full border border-neutral-200 p-4 flex justify-between items-center bg-white shadow-sm rounded-md">
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
