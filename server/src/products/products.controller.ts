import { NextFunction, Request, Response } from "express";
import CrudGen from "../util/CrudGen";

class ProductController extends CrudGen {
  get(req: Request, res: Response, next: NextFunction): void {
    console.log("getter ");
    res.json({ message: "test 123123213" });
  }
}
export default ProductController;
