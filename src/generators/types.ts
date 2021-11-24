import { upperCaseFirst } from "upper-case-first"

import { saveResource } from "../actions"
import { typesTemplate } from "../templates"
import { MappedDomain, TypesTemplate } from "../types"

/**
 * Generates a more usable set of typescript definitions including lookup objects.
 *
 * @param {MappedDomain[]} domains
 * @return {Promise<void>}
 */
export const generateTypes = async (domains: MappedDomain[]): Promise<void> => {
  const params: TypesTemplate = {
    defs: [],
    paramsLookup: [],
    resultLookup: []
  }

  for (const { domain, commands, defs } of domains) {
    params.defs.push(`export interface ${domain}Domain { ${defs} }`)
    params.paramsLookup.push(
      ...commands
        .filter(({ hasParams }) => hasParams)
        .map(
          ({ name }) =>
            `"${domain}.${name}": Protocol.${domain}.${upperCaseFirst(
              name
            )}Request`
        )
    )
    params.resultLookup.push(
      ...commands
        .filter(({ hasResult }) => hasResult)
        .map(
          ({ name }) =>
            `"${domain}.${name}": Protocol.${domain}.${upperCaseFirst(
              name
            )}Response`
        )
    )
  }

  await saveResource("types.ts", typesTemplate(params))
}
