import { SchemasTemplate } from "../types"

export const schemasTemplate = ({
  requests,
  events
}: SchemasTemplate): string =>
  `
import { z } from "zod"
export const ProtocolRequestSchema = z.enum([${requests.join(", ")}])
export const ProtocolEventSchema = z.enum([${events.join(", ")}])
export const ProtocolMethodSchema = z.union([ProtocolRequestSchema, ProtocolEventSchema ])
`.trim()
