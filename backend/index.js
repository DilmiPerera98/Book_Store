import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./router/book.router.js";

dotenv.config();

const app = express();
app.use(express.json());

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

//create error middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  return res.status(statusCode).json({ success: false, statusCode, message });
});
