// env variables + db.ts are required to connect to the database
import "dotenv/config"  // load environment variables
import { db } from "./drizzle/db"  
import { UserTable } from "./drizzle/schema"  // required to interact with the targeted table

async function main() {
  // add a new user to the database
  await db.insert(UserTable).values({ 
    name: "John Doe",
    age: 43,
    email: "fake@email.com"
  })
  // query the first user from the database
  const firstUser = await db.query.UserTable.findFirst()
  console.log(firstUser)
}

main()