import express from "express";
import dotenv from "dotenv";
import { nanoid } from "nanoid";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/api/create", (req, res) => {
  const { url } = req.body;
  console.log(url);

  res.send(nanoid(7));
});






app.listen(process.env.PORT, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});