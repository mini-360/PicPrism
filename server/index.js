import express from "express";
import "dotenv/config";

import authRoute from "./routes/authRoute.js";
import  {connectDb}  from "./connection.js";

const app = express();

connectDb()

app.get("/", (req, res) => {
  res.send("<center><h1>Server running</h1></center>");
});

app.use("/api", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
