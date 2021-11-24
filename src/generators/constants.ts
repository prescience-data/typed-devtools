import { saveResource } from "../actions"
import { constantsTemplate } from "../templates"
import { ConstantsTemplate, MappedDomain } from "../types"

/**
 * Generates a typescript file which can be imported to more easily used typesafe strings from cast objects.
 * Each object is a single Domain.
 *
 * @param {MappedDomain[]} domains
 * @return {Promise<void>}
 */
export const generateConstants = async (
  domains: MappedDomain[]
): Promise<void> => {
  const params: ConstantsTemplate = {
    domains: []
  }

  params.domains.push(
    ...domains.map(
      ({ domain, defs }) =>
        `export const ${domain}: Protocol.${domain}Domain = { ${defs} }`
    )
  )

  await saveResource("constants.ts", constantsTemplate(params))
}
