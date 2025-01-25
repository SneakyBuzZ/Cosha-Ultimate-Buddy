import { Router } from "express";
import authRouter from "./auth.route.js";
import projectRouter from "./project.route.js";
import { authenticateJWT } from "../middlewares/auth.middleware.js";

const indexRouter = Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/project", authenticateJWT, projectRouter);
// indexRouter.use("/project", projectRouter);

export default indexRouter;
