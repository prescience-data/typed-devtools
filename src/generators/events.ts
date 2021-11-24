import { saveResource } from "../actions"
import { stringify } from "../support"
import { MappedDomain } from "../types"

/**
 * Generates a json file with each event scoped to it's domain.
 *
 * @param {MappedDomain[]} domains
 * @return {Promise<void>}
 */
export const generateEvents = async (
  domains: MappedDomain[]
): Promise<void> => {
  const resource: string = stringify(
    Object.fromEntries(
      domains.map(({ domain, events }) => [
        domain,
        events.map(({ name }) => `${domain}.${name}`)
      ])
    )
  )

  await saveResource("events.json", resource)
}
