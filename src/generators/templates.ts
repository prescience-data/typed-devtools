import { saveResource } from "../actions"
import { CommandSchema, stringify } from "../support"
import { MappedDomain } from "../types"

/**
 * Generates "templates" resource.
 * This resource is a json file containing nulled params for each message shape.
 *
 * @param {MappedDomain[]} domains
 * @return {Promise<void>}
 */
export const generateTemplates = async (
  domains: MappedDomain[]
): Promise<void> => {
  const resource: string = stringify({
    commands: domains
      .map(({ domain, commands }) =>
        commands.map(({ name, params }) =>
          CommandSchema.parse({
            method: `${domain}.${name}`,
            params: params
              ? Object.fromEntries(params.map((key) => [key, null]))
              : undefined
          })
        )
      )
      .flat()
  })

  await saveResource(`templates.json`, resource)
}
