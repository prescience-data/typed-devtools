import { saveResource } from "../actions"
import { stringify } from "../support"
import { MappedDomain } from "../types"

/**
 * Generates a json file containing each command scoped to it's domain.
 *
 * @param {MappedDomain[]} domains
 * @return {Promise<void>}
 */
export const generateCommands = async (
  domains: MappedDomain[]
): Promise<void> => {
  const resource: string = stringify(
    Object.fromEntries(
      domains.map(({ domain, commands }) => [
        domain,
        commands.map(({ name }) => `${domain}.${name}`)
      ])
    )
  )
  await saveResource(`commands.json`, resource)
}
