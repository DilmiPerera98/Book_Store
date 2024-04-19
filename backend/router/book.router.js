import express from "express";
import {
  createBook,
  deletebook,
  findbook,
  getBooks,
  test,
  updatebook,
} from "../controller/book.controller.js";

const router = express.Router();

router.get("/test", test);
router.post("/createbook", createBook);
router.get("/getbooks", getBooks);
router.get("/findbook/:id", findbook);
router.post("/updatebook/:id", updatebook);
router.delete("/deletebook/:id", deletebook);

export default router;
