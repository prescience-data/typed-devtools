import { saveResource } from "../actions"
import { schemasTemplate } from "../templates/schemas"
import { MappedDomain, SchemasTemplate } from "../types"

/**
 * Generates a series of helpful Zod schemas to parse raw messages.
 *
 * @param {MappedDomain[]} domains
 * @return {Promise<void>}
 */
export const generateSchemas = async (
  domains: MappedDomain[]
): Promise<void> => {
  const params: SchemasTemplate = {
    requests: [],
    events: []
  }

  for (const { domain, commands, events } of domains) {
    params.requests.push(...commands.map(({ name }) => `"${domain}.${name}"`))
    params.events.push(...events.map(({ name }) => `"${domain}.${name}"`))
  }

  await saveResource("schemas.ts", [schemasTemplate(params)])
}
