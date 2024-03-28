import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
export { prisma };

// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";
//
// const connectionString = `${process.env.DATABASE_URL}`;
//
// const pool = new Pool({ connectionString: process.env.DATABASE_URL })
// const adapter = new PrismaPg(pool);
// export const prisma = new PrismaClient({ adapter });
