src:
- https://www.youtube.com/watch?v=i_mAHOhpBSA (2024)
- https://www.youtube.com/watch?v=7-NZ0MlPpJA (2024)

# Intro (Fireship)

Drizzle ORM is a lightweight set of tools that makes type-safe object relational mapping (ORM) with your favorite  
relational database fun again.  

Most apps in the real world rely on databases like MySQL, PostgreSQL, and SQLite to store their critical user data.  
But working with raw SQL can be painful, and even life-threatening when you screw up.  

Over the decades, hundreds of libraries have been built to abstract away SQL code to hide its complexity inside your favorite  
object-oriented programming language. This technique is called "Object Relational mapping".  

ORM is great and all, but can often bring unnecessary performance overhead, and cause leaky abstractions because  
the developers have no idea how their underlying SQL code actually works.  

Drizzle is an ORM that takes the opposite approach.  
It provides an API in TypeScript that closely matches the native underlying SQL code.

```ts
await db
  .select()
  .from(countries)
  .leftJoin(cities, eq(cities.countryId = countries.id))
  .where(eq(countries.id, 10))
```

```php
SELECT * FROM countries LEFT JOIN cities ON cities.countryId = countries.id WHERE countries.id = 10;
```

This gives you the benefits of both **Type Safety** and **Intellisense** without all the crazy abstractions.  

# But how is that possible when every database is different?

Instead of trying to jam everything into a single API, Drizzle provides dedicated adapters for each one of them.  
Along with dedicated tools for popular Cloud hosts like RDS and Neon.  

But if the above TypeScript code looks too raw and uncensored for you, Drizzle also provides an optional **Prisma-like query API**   
that keeps your data fetching and join code concise and readable.  

In addition, it provides an optional **CLI** for handling database migrations called **Drizzle Kit**.  

But the cherry on top is **Drizzle Studio**, a GUI you can run locally to manage your data.  

# Get started

To get started, you'll first need a relational database.  
Drizzle is designed to run on any JS runtime like Node.js, Bun and Deno, as well as Edge runtimes like Cloudflare workers.  

## installation and connection to the database

- install Drizzle: `npm i drizzle-orm`
- install your database driver: `npm i <db_driver>`
- install Drizzle Kit for migrations: `npm i -D drizzle-kit`
  
Alternatively, you can use the Drizzle Setup CLI for one-command setup: `npx drizzle-setup`  
This tool guides you through selecting your database and installs all required packages automatically.

- then connect to the database in your TypeScript code (index.ts)
- before starting to make queries, you need to create a `schema.ts` file
  - in this schema file, define your **tables** using the `pgTable` function
  - each table has a name followed by columns defined in a JavaScript object, like in the example below
    ```ts
    export const users = pgTable('users', {
      id: serial('id', primaryKey(),
      name: text('name'),
      email: text('email').unique(),
      createdAt: timestamp('created_at').notNull().defaultNow()
    });
    ```
  - columns are given constraints with JS functions that match their SQL equivalent, such as `notNull()`
  - once a table is defined, we can reference it in other tables to create relationships with foreign keys
  - optionally, we can use the `relations()` function to simplify relational queries and joints

---
End of Fireship's video, start of Web Dev Simplified video
---

# Intro (WDS)

To get a project set up and running with Drizzle, you'll see that there's 3 different components:
- Drizzle ORM
- Drizzle Kit
- Drizzle Studio

# Drizzle ORM

- first, you need to choose your database type (MySQL, PostgreSQL, or SQLite)
- then pick the database driver of your choice (check Drizzle documentation)
- install Drizzle and the DB driver of your choice: `npm i drizzle-orm postgres`
- 


