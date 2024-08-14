import { NextFunction, Request, Response } from "express";
import CrudGen from "../util/CrudGen";
import CacheInstance from "../util/nodeCache";

const cache = CacheInstance.getInstance();
class ProductController extends CrudGen {
  get(req: Request, res: Response, next: NextFunction): void {
    console.log("getter ");
    const products = cache.getCache("products");
    res.json(products);
  }
}
export default ProductController;
