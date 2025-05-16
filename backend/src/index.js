import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
import { connectDB } from "./config/db.js";
import { ShortUrl } from "./models/ShortUrl.js";
dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/create", (req, res) => {
  const { url } = req.body;
  const shortURL = nanoid(7);
  const newURL = new ShortUrl({
    fullUrl: url,
    shortUrl: shortURL,
    // user: req.user._id
  })
  newURL.save();

  res.send(nanoid(7));

});






app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});