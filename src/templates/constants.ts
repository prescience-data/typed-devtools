import { NEW_LINE } from "../support"
import { ConstantsTemplate } from "../types"

export const constantsTemplate = ({ domains }: ConstantsTemplate): string =>
  `
import * as Protocol from "./types"

${domains.join(NEW_LINE + NEW_LINE)}

`.trim()
