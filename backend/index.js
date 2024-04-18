import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./router/book.router.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.use("/api/book", bookRouter);
