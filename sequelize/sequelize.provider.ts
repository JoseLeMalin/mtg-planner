import { Sequelize } from "@sequelize/core";
import pg from "pg";
// Option 1: Passing a connection URI

const sequelize = new Sequelize(
  "postgresql://JoseLeMalin:654321@localhost:5432/youcode-postgres?schema=public",
  {
    dialect: "postgres",
    dialectModule: pg,
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
