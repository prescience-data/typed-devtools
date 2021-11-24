import { INDENT, NEW_LINE } from "../support"
import { JsonDomain, MappedDomain } from "../types"

/**
 * Parses the returns json spec into a usable format.
 *
 * @param {JsonDomain[]} json
 * @return {MappedDomain[]}
 */
export const mapDomains = (json: JsonDomain[]): MappedDomain[] =>
  json
    .map(({ domain, commands, events }) => ({
      domain,
      commands: (commands ?? []).map(({ name, parameters, returns }) => ({
        name,
        params: parameters?.map(({ name }) => name),
        result: returns?.map(({ name }) => name),
        hasParams: !!parameters,
        hasResult: !!returns
      })),
      events: (events ?? []).map(({ name, parameters }) => ({
        name,
        params: parameters?.map(({ name }) => name),
        hasParams: !!parameters
      }))
    }))
    .map(({ domain, commands, events }) => {
      const names: string[] = [
        ...commands.map(({ name }) => name),
        ...events.map(({ name }) => name)
      ]
      return {
        domain,
        commands,
        events,
        names,
        methods: names.map((name) => `${domain}.${name}`),
        defs:
          INDENT +
          names
            .map((name) => `${name}: "${domain}.${name}"`)
            .join(`,` + INDENT) +
          NEW_LINE
      }
    })
