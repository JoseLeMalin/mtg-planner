import { Account } from "@/src/models/account";
import { User } from "@/src/models/user";
import { Sequelize } from "@sequelize/core";
import pg from "pg";
// Option 1: Passing a connection URI

const sequelize = new Sequelize(
  "postgresql://JoseLeMalin:654321@localhost:5432/youcode-postgres?schema=public",
  {
    schema: 'public',
    dialect: "postgres",
    dialectModule: pg,
    models: [User, Account],
  },
); // Example for postgres

export const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  sequelize.close();
};
