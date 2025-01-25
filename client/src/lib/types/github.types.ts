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
};
