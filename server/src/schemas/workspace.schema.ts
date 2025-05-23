import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().min(1).max(255),
  plan: z.enum(["free", "pro", "enterprise"]),
  userId: z.string().uuid(),
});
