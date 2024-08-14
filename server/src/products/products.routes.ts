import ProductController from "./products.controller";

const { Router } = require("express");

// Handles requests made to /api/products
const productsRouter = Router();
const productController = new ProductController();

productsRouter.get("/", productController.getAll);
productsRouter.post("/", productController.post);
productsRouter.get("/:id", productController.get);

productsRouter.put("/", productController.put);

productsRouter.delete("/", productController.delete);

export default productsRouter;
