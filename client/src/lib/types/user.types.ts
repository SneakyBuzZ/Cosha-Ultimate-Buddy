import { CollaboratorType } from "./collorator.types";
import { ProjectType } from "./project.types";

export type UserType = {
  id: string;
  name: string;
  email: string;
  image?: string;
  oauthId: string;
  provider: string;
  refreshToken?: string;
  createdAt: Date;

  projects: ProjectType[];
  asCollaboratorProjects: CollaboratorType[];
};
