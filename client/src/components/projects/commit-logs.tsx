import { CommitType } from "@/lib/types/github.types";
import React from "react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type CommitLogsProps = {
  commits: CommitType[];
};

const CommitLogs: React.FC<CommitLogsProps> = ({ commits }) => {
  return (
    <div className="container mx-auto p-10 border">
      <div className="relative border-l border-gray-300 dark:border-gray-700">
        {commits &&
          commits.map((commit, index) => (
            <div
              key={index}
              className="mb-10 ml-6 flex flex-col md:flex-row items-start group"
            >
              {/* Icon */}
              <Avatar className="absolute -left-5 w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <AvatarImage src={commit.author.avatar} />
                <AvatarFallback>{commit.author.name}</AvatarFallback>
              </Avatar>

              {/* Content */}
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-neutral-400 group-hover:text-neutral-900">
                  {commit.message}
                </h3>
                <time className="block mb-2 text-sm font-normal text-gray-500 dark:text-gray-500">
                  {commit.date}
                </time>
                <p className="text-base text-gray-700 dark:text-neutral-600">
                  {commit.summary}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommitLogs;
