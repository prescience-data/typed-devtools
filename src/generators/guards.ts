import { saveResource } from "../actions"

export const generateGuards = async (): Promise<void> => {
  const resource: string[] = []

  await saveResource("guards.ts", resource)
}
