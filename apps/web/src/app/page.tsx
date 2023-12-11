import { db } from "db"

export default async function Page() {
  const result = await db.query.table.findFirst()
  return <div>{JSON.stringify(result, null, 2)}</div>
}
