export class InvalidTargetDirectoryError extends Error {
  public constructor(path: string) {
    super(`Could not locate protocol resource directory at "${path}"`)
  }
}
