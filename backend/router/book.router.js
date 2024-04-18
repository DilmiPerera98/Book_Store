import express from "express";
import { bookCreate } from "../controller/book.controller.js";

const router = express.Router();

router.get("/create", bookCreate);

export default router;
