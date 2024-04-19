import Book from "../models/book.model.js";
import { errorHandler } from "../utils/error.js";

//create book
export const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).json({ success: true, book });
  } catch (error) {
    next(error);
  }
};

//update book
export const updatebook = async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    return next(errorHandler(404, "Book not found"));
  }

  try {
    const updatebook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ success: true, updatebook });
  } catch (error) {
    next(error);
  }
};

//get all books
export const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ success: true, books });
  } catch (error) {
    next(error);
  }
};

//find book
export const findbook = async (req, res, next) => {
  try {
    const findbook = await Book.findById(req.params.id);
    return res.status(200).json({ success: true, findbook });
  } catch (error) {
    next(error);
  }
};

//delete book
export const deletebook = async (req, res, next) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return next(errorHandler(404, "Book not found"));
  }

  try {
    await Book.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const test = async (req, res) => {
  res.json({ message: "Create book 2" });
};

//create book
//use async bcz mongoose is a asynchroneous function
