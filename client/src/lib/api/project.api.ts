import axios from "axios";
import { CREATE_PROJECT_URL } from "../endpoints";
import { CreateProjectType, ProjectType } from "../types/project.types";

export const createProject = async (
  data: CreateProjectType,
  accessToken: string
) => {
  await axios.post(
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
  const response = await axios.get("http://localhost:8000/api/projects", {
    headers: {
      Authorization: `${accessToken}`,
    },
  });

  console.log("RESPONSE: ", response);

  return response.data.payload;
};
