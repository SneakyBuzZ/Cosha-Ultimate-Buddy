import { Router } from "express";
import { create, getAll } from "../controllers/project.controller.js";

const projectRouter = Router();

projectRouter.post("", create);

projectRouter.get("", getAll);

export default projectRouter;
