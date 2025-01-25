import { Request, Response } from "express";
import {
  createSchema,
  getAllSchema,
  getByIdSchema,
} from "../lib/schemas/project.schema.js";
import { ApiError, ApiResponse } from "../lib/class.js";
import { db } from "../config/db.config.js";

export const create = async (req: Request, res: Response) => {
  const { success, data } = createSchema.safeParse(req.body);

  if (!success) {
    return res
      .status(400)
      .json(new ApiError(400, "Bad Request", "Invalid request body"));
  }

  const { name, url } = data;

  await db.project.create({
    data: {
      name,
      url,
      ownerId: req.userId,
    },
  });

  return res
    .status(201)
    .json(new ApiResponse(201, {}, "Project created successfully"));
};

export const getAll = async (req: Request, res: Response) => {
  const { success, data } = getAllSchema.safeParse(req.query);

  if (!success) {
    return res
      .status(400)
      .json(new ApiError(400, "Bad Request", "Invalid request query"));
  }

  const { pageNo, skip } = data;

  const projects = await db.project.findMany({
    where: {
      ownerId: req.userId,
    },
    skip: skip ? Number(skip) : undefined,
    take: pageNo ? Number(pageNo) : undefined,
  });

  return res.status(200).json(new ApiResponse(200, projects));
};

export const getById = async (req: Request, res: Response) => {
  const { success, data } = getByIdSchema.safeParse(req.params);

  if (!success) {
    return res
      .status(400)
      .json(new ApiError(400, "Bad Request", "Invalid request params"));
  }

  const { id } = data;

  const project = await db.project.findUnique({
    where: {
      id,
    },
  });

  if (!project) {
    return res
      .status(404)
      .json(new ApiError(404, "Not Found", "Project not found"));
  }

  return res.status(200).json(new ApiResponse(200, project));
};
