export type CommitType = {
  sha: string;
  message: string;
  author: {
    name: string;
    avatar: string;
    url: string;
  };
  url: string;
  date: string;
  summary?: string;
};

export type RepoOwnerType = {
  avatar: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  publicRepos: number;
};
