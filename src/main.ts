import { db } from "./drizzle/db"
import { UserTable } from "./drizzle/schema"

async function main() {
  // add a new user to the database
  await db.insert(UserTable).values({ 
    name: "John Doe" 
  })
  // query the first user from the database
  const firstUser = await db.query.UserTable.findFirst()
}

main()