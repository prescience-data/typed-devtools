/**
 * Converts an object to a pretty print json string.
 *
 * @param obj
 * @return {string}
 */
export const stringify = (obj: unknown): string =>
  JSON.stringify(obj, undefined, 2)
