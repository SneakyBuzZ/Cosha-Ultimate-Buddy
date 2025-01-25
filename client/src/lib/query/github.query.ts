import { useMutation } from "@tanstack/react-query";
import { getCommitsByUrl } from "../github";

export const useGetCommitsByUrl = () => {
  return useMutation({
    mutationFn: (url: string) => getCommitsByUrl(url),
  });
};
