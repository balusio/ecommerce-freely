import { NextFunction, Request, Response } from "express";
import CrudGen from "../util/CrudGen";
import ProductsService from "./products.service";

class ProductController extends CrudGen {
  getAll(req: Request, res: Response, next: NextFunction): void {
    const products = ProductsService.getAllProducts();
    res.json(products);
  }

  get(req: Request, res: Response, next: NextFunction): void {
    const product = ProductsService.getProduct(parseInt(req.params.id));

    res.json(product);
  }
}

export default ProductController;
