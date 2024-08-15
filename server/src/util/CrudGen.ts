import { NextFunction, Request, Response } from "express";

interface CrudGenInterface {
  get(req: Request, res: Response, next: NextFunction): void;
  post(req: Request, res: Response, next: NextFunction): void;
  put(req: Request, res: Response, next: NextFunction): void;
  delete(req: Request, res: Response, next: NextFunction): void;
}

/**
 * General API class to handle CRUD operations on controllers
 */
class CrudGen implements CrudGenInterface {
  constructor() {
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
  }

  get(req: Request, res: Response, next: NextFunction) {
    res.json();
  }
  post(req: Request, res: Response, next: NextFunction) {
    res.json();
  }

  put(req: Request, res: Response, next: NextFunction) {
    res.json();
  }

  delete(req: Request, res: Response, next: NextFunction) {
    res.json();
  }
}

export default CrudGen;
