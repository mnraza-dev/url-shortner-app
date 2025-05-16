import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  res.send(nanoid(7));
});






app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});