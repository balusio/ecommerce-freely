import CacheInstance from "../util/nodeCache";
import ProductModel, { Product } from "./products.model";

const cache = CacheInstance.getInstance();

class ProductsService {
  productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  public static getAllProducts(): Product[] {
    const products = cache.getCache("products");
    return products;
  }

  public static getProduct(id: number): Product | undefined {
    const product = ProductModel.getProduct(id);

    return product;
  }
}

export default ProductsService;
