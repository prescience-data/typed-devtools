import got from "got"

import { JsonDomain, JsonProtocol } from "../types"

/**
 * List of DevTools spec files to generate resources from.
 * @type {string[]}
 */
const sources: string[] = [
  "https://raw.githubusercontent.com/ChromeDevTools/devtools-protocol/master/json/browser_protocol.json",
  "https://raw.githubusercontent.com/ChromeDevTools/devtools-protocol/master/json/js_protocol.json"
]

/**
 * Fetches all remote json content and returns as an array of typed objects.
 *
 * @return {Promise<JsonProtocol[]>}
 */
const resolveAll = async (): Promise<JsonProtocol[]> =>
  Promise.all(sources.map((source: string) => got(source).json<JsonProtocol>()))

/**
 * Fetches the full Chrome DevTools spec from GitHub repository.
 *
 * @return {Promise<JsonDomain[]>}
 */
export const fetchProtocol = async (): Promise<JsonDomain[]> =>
  (await resolveAll()).map(({ domains }) => domains).flat(1)
