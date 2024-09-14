import express from "express";
import  "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("<center><h1>Server running</h1></center>");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
