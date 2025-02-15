import { CollaboratorType } from "./collorator.types";
import { UserType } from "./user.types";

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  token?: string;

  ownerId: string;
  owner: UserType;

  ProjectCollaborators: CollaboratorType[];
};

export type CreateProjectType = {
  name: string;
  url: string;
  collaborators: string[];
};
