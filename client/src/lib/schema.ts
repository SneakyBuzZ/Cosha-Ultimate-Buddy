import { z } from "zod";

export const newProjectSchema = z.object({
  name: z.string().min(3).max(50),
  url: z.string().url(),
  collaborators: z.array(z.string().email()),
});
