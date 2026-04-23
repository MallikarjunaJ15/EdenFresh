import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByPrice,
  getProductsByRating,
} from "../controllers/product.controller.js";
const router = express.Router();

router.post("/", isAuthenticated, createProduct);
router.put("/:id", isAuthenticated, updateProduct);
router.delete("/:id", isAuthenticated, deleteProduct);
router.get("/featured", getFeaturedProducts);
router.get("/price", getProductsByPrice);
router.get("/rating", getProductsByRating);
router.get("/", getAllProducts);
export default router;
