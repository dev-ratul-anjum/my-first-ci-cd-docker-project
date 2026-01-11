import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
console.log("v1 test");

app.get("/", (req, res) => {
  let name: string = "Ratul Anjum rafi v1";

  res.status(200).json({
    message: `This is my first dockerize project. Me : ${name}, Db Url : ${process.env.DB_URL}`,
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at : http://localhost:${port}`);
});
