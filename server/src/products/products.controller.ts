import { NextFunction, Request, Response } from "express";
import CrudGen from "../util/CrudGen";
import CacheInstance from "../util/nodeCache";

const cache = CacheInstance.getInstance();
class ProductController extends CrudGen {
  getAll(req: Request, res: Response, next: NextFunction): void {
    const products = cache.getCache("products");
    res.json(products);
  }

  get(req: Request, res: Response, next: NextFunction): void {
    const products = cache.getCache("products");
    const product = products.find(
      (product: any) => product.id === parseInt(req.params.id)
    );

    res.json(product);
  }
}
export default ProductController;
