import { pgTable, uuid, varchar, integer } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
})

