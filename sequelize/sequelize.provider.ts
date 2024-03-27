import { env } from "@/src/lib/env";
import { Sequelize } from "sequelize";
import pg from "pg";

// Option 1: Passing a connection URI
// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database

export const sequelize = new Sequelize(env.DATABASE_URL, {
  dialect: "postgres",
  dialectModule: pg,
});

export const syncDatabase = async () => {
  try {
    console.log("env.DATABASE_URL: ", env.DATABASE_URL);
    if (env.NODE_ENV === "development") {
      await sequelize.sync();
      console.log("All models were synchronized successfully.");
      sequelize.close();
      console.log("Connection has been closed successfully.");
    }
  } catch (error) {
    console.error("syncDatabase Unable to sync database:", error);
  }
};

const authenticate = async () => {
  try {
    console.log("authenticate env.DATABASE_URL: ", env.DATABASE_URL);

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("authenticate Unable to connect to the database:", error);
  }
  sequelize.close();
  console.log("Connection has been closed successfully.");
};
async () => await authenticate();
async () => await syncDatabase();
