import { fetchProtocol } from "../actions"
import { mapDomains } from "../actions/map-domains"
import {
  generateCommands,
  generateConstants,
  generateEvents,
  generateSchemas,
  generateTemplates,
  generateTypes
} from "../generators"
import { MappedDomain } from "../types"

/**
 * Primary entrypoint to the generation library.
 *
 * @return {Promise<void>}
 */
export const generate = async (): Promise<void> => {
  const domains: MappedDomain[] = mapDomains(await fetchProtocol())
  if (!domains.length) {
    throw new Error(`No results were returned from GitHub.`)
  }

  console.log(`Generating resources for ${domains.length} CDP domains.`)

  await Promise.all([
    generateCommands(domains),
    generateConstants(domains),
    generateEvents(domains),
    generateSchemas(domains),
    generateTemplates(domains),
    generateTypes(domains)
  ])

  console.log(`Resource generation complete!`)
}
