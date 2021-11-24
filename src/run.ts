import { generate } from "./core"

generate().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
