import { useMutation } from "@tanstack/react-query";
import { createProject, getAllProjects } from "../api/project.api";
import { CreateProjectType } from "../types/project.types";

export const useCreateProject = () => {
  return useMutation({
    mutationFn: ({
      data,
      accessToken,
    }: {
      data: CreateProjectType;
      accessToken: string;
    }) => createProject(data, accessToken),
  });
};

export const useGetAllProjects = () => {
  return useMutation({
    mutationFn: (accessToken: string) => getAllProjects(accessToken),
  });
};
