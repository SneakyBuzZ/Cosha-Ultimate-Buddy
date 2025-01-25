import axios from "axios";
import { CREATE_PROJECT_URL, GET_ALL_PROJECT_URL } from "../endpoints";
import { CreateProjectType, ProjectType } from "../types/project.types";

export const createProject = async (
  data: CreateProjectType,
  accessToken: string
) => {
  const response = await axios.post(
    CREATE_PROJECT_URL,
    {
      name: data.name,
      url: data.url,
      collaborators: data.collaborators,
    },
    {
      headers: {
        Authorization: `${accessToken}`,
      },
    }
  );
};

export const getAllProjects = async (
  accessToken: string
): Promise<ProjectType[]> => {
  const response = await axios.get(GET_ALL_PROJECT_URL, {
    headers: {
      Authorization: `${accessToken}`,
    },
  });
  return response.data.payload;
};
