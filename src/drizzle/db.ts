// this file handles the connection to the database

import { drizzle } from "drizzle-orm/postgres-js"
import * as schema from "./schema"
import postgres from "postgres"

const client = postgres(process.env.DATABASE_URL as string)
export const db = drizzle(client, { schema, logger: true })

/**
 * Setting logger to true in the Drizzle ORM initialization enables default query logging for your database operations. 
 * This means that every SQL query executed by Drizzle will be logged to the console or the default logging destination, 
 * allowing you to see the actual SQL statements being run, along with their parameters.
 */