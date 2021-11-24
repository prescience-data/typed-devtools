import { ensureDir, pathExists, writeFile } from "fs-extra"
import { normalize } from "path"

import {
  InvalidTargetDirectoryError,
  NEW_LINE,
  RESOURCE_PATH
} from "../support"

/**
 * Writes resource array to file, joining with new line.
 *
 * @param {string} filename
 * @param {string | string[]} content
 * @param {string} targetDir
 * @return {Promise<void>}
 * @throws {InvalidTargetDirectoryError}
 */
export const saveResource = async (
  filename: string,
  content: string | string[],
  targetDir: string = RESOURCE_PATH
): Promise<void> => {
  // Ensure dist directory exists.
  await ensureDir(targetDir)
  // Verify directory was created.
  if (!(await pathExists(targetDir))) {
    throw new InvalidTargetDirectoryError(targetDir)
  }
  // Write file to disk.
  const filePath: string = normalize(`${targetDir}/${filename}`)
  console.log(`Writing "${filePath}"`)
  await writeFile(
    filePath,
    Array.isArray(content) ? content.join(NEW_LINE + NEW_LINE) : content
  )
}
