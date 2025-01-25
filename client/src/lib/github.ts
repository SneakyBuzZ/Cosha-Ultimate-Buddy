import { Octokit } from "@octokit/rest";
import { format } from "date-fns";
import { CommitType } from "./types/github.types";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const parseGitHubUrl = (url: string) => {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (!match || match.length < 3) {
    throw new Error("Invalid GitHub URL");
  }
  return { owner: match[1], repo: match[2] };
};

export const getCommitsByUrl = async (
  githubUrl: string
): Promise<CommitType[]> => {
  try {
    const { owner, repo } = parseGitHubUrl(githubUrl);

    const response = await octokit.rest.repos.listCommits({
      owner,
      repo,
      per_page: 10,
    });

    const commits = response.data.map((each) => {
      return {
        sha: each.sha,
        message: each.commit.message,
        author: {
          name: each.author?.name || "Unknown",
          avatar: each.author?.avatar_url || "",
          url: each.author?.html_url || "",
        },
        url: each.html_url,
        date: format(new Date(each.commit.author?.date || ""), "PPpp"),
      };
    });

    return commits;
  } catch (error) {
    console.error(error);
    return [];
  }
};
