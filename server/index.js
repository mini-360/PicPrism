import express from "express";
import "dotenv/config";

import authRoute from "./routes/authRoute.js";
import { connectDb } from "./connection.js";
import cors from "cors"

const app = express();

connectDb()

// app.use(cors())



app.get("/", (req, res) => {
  res.send("<center><h1>Server running</h1></center>");
});

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", authRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
