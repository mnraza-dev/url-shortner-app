import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import { connectDB } from "./config/db.js";
import shortURL from "./models/ShortUrl.js";
dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  const shortUrl = nanoid(7);
  const newUrl = new shortURL({
    fullUrl: url,
    shortUrl: shortUrl,
    // user: req.user._id
  });
  newUrl.save();
  res.json({
    message: "success",
    data: newUrl,
  });
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
