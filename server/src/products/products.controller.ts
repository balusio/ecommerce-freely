import { NextFunction, Request, Response } from "express";
import CrudGen from "../util/CrudGen";
import ProductsService from "./products.service";

class ProductController extends CrudGen {
  private productService: ProductsService;

  constructor() {
    super();
    this.productService = new ProductsService();
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.put = this.put.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
  }

  getAll(req: Request, res: Response, next: NextFunction): void {
    const products = this.productService.getAllProducts();
    if (products) {
      res.json(products);
      res.status(200);
    } else {
      res.status(204);
      res.json({ message: "not products found" });
    }
  }

  get(req: Request, res: Response, next: NextFunction): void {
    const product = this.productService.getProduct(parseInt(req.params.id));

    if (product) {
      res.json(product);
    } else {
      res.status(204);
      res.json({ message: "error, product not found" });
    }
  }

  post(req: Request, res: Response): void {
    console.log(req.body);
    const newProduct = this.productService.addProduct(req.body);
    if (newProduct) {
      res.json(newProduct);
    } else {
      res.json({ message: "error, product not saved" });
      res.status(500);
    }
  }
}

export default ProductController;
