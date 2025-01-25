"use client";

import CommitLogs from "@/components/projects/commit-logs";
import useProject from "@/hooks/use-project";
import { useGetCommitsByUrl } from "@/lib/query/github.query";
import { CommitType } from "@/lib/types/github.types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCode, FaRocket, FaTrophy } from "react-icons/fa";

const events = [
  {
    date: "January 1, 2025",
    title: "Started DSA Journey",
    description: "Began mastering DSA to prepare for MNC interviews.",
    icon: <FaCode className="text-white" />,
  },
  {
    date: "November 21, 2024",
    title: "Won Hackathon",
    description:
      "Built a blockchain-based user-friendly app and won 1st place in a hackathon.",
    icon: <FaTrophy className="text-white" />,
  },
  {
    date: "November 7, 2024",
    title: "Explored Next.js",
    description:
      "Dived into Next.js and built full-stack apps with advanced features.",
    icon: <FaRocket className="text-white" />,
  },
];

const page = () => {
  const { projectId } = useParams();
  const { projects } = useProject();

  const [commits, setCommits] = useState<CommitType[]>([]);

  const { mutateAsync: getCommitsByUrl, isPending } = useGetCommitsByUrl();

  const project = projects?.find((project) => project.id === projectId);

  useEffect(() => {
    if (!project) return;
    getCommitsByUrl(project.url).then((data) => setCommits(data));
  }, [project]);

  return (
    <div>
      <h1>Project Page</h1>
      <p>Project ID: {projectId}</p>
      <p>Projects: {projects[0].url}</p>

      <CommitLogs commits={commits} />
    </div>
  );
};

export default page;
