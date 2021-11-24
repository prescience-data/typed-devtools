import { z } from "zod"

export const CommandSchema = z.object({
  method: z.string(),
  params: z.record(z.union([z.string(), z.null()])).optional()
})
