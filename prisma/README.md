// npx prisma generate creates the prisma folder including the schema.prisma
pnpx prisma generate

// If the DB is empty => Fill the data model/schema in schema.prisma
// Run: npx prisma db push to create tables in the DB matching the schema
pnpx prisma db push

// MIGRATIONS
https://www.prisma.io/docs/orm/prisma-migrate/getting-started

// If the DB already exists and has tables prisma db pull makes sure that your Prisma schema is up-to-date
pnpx prisma db pull

// To create a baseline migration:
mkdir -p prisma/migrations/0_init

// Create an initial SQL file which contains all the code to recreate the DB
pnpx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql

// Migrate following model changes
//      Update DB model
//      Make sure prisma file is correct: npx prisma format
//      Deploy migration: npx prisma migrate dev    => Give name to new migration file
//      


Tried installing @prisma/client manually, it seems to help. So here is a possible workaround until the problem is fixed.

Delete node_modules
Run npm install
Run npm install @prisma/client
Run npx prisma generate / npm prisma migrate dev
