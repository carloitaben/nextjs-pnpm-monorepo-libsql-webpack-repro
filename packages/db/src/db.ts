import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"
import { env } from "./env"
import * as schema from "./schema"

const client = createClient({
  url: String(env.DATABASE_URL),
  authToken: String(env.DATABASE_AUTH_TOKEN),
})

export const db = drizzle(client, {
  schema,
})
