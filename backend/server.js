import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongoDB from "./db.js";

dotenv.config();

const app = express();

// Connecting to MongoDB

connectToMongoDB();

// setup routes
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Welcome to FarmFresh!");
});

app.use((req, res, next) => {
  return res
    .status(404)
    .json({ message: "The Requested URL does not exist", status: "error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
