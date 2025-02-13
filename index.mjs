import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config.mjs";
import ngoRoutes from "./routes/ngoRoutes.mjs";

dotenv.config();
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use("/", ngoRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
