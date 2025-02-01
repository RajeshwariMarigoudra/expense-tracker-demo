import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Create a new Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Set to true if you want to debug SQL queries
  }
);

// Function to authenticate database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Database Connected Successfully!");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
    process.exit(1); // Exit process on failure
  }
};

export { sequelize, connectDB };
