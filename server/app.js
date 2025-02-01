import express from "express";
import cors from "cors";
import { sequelize, connectDB } from "./DB/Database.js"; // Import Sequelize connection
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Allowed CORS origins
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

// Middleware
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API Routes
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server only after DB is connected
const startServer = async () => {
  await connectDB(); // Connect to MySQL
  sequelize.sync({ alter: true }) // Sync models
    .then(() => {
      console.log("✅ Database Synced Successfully!");
      app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
      });
    })
    .catch(err => console.error("❌ Error syncing database:", err));
};

startServer();
