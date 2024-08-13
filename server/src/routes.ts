import { Router } from "express";
import productController from "./products/products.controller";
import productsRouter from "./products/products.routes";
const router = Router();

router.use("/products", productsRouter);

export default router;
