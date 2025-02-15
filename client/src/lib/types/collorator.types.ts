import { ProjectType } from "./project.types";
import { UserType } from "./user.types";

export type CollaboratorType = {
  id: string;
  projectId: string;
  userId: string;
  project: ProjectType;
  user: UserType;
};
