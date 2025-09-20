import express from "express";
import Product from "../models/product.model.js";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);

router.post("/:id", updateProduct); // update
router.delete("/:id", deleteProduct); // delete

export default router;   
