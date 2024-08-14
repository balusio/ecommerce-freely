import CacheInstance from "../util/nodeCache";
import ProductModel, { Product } from "./products.model";

const cache = CacheInstance.getInstance();

class ProductsService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  getAllProducts(): Product[] {
    const products = this.productModel.getAllProducts();
    return products;
  }

  getProduct(id: number): Product | undefined {
    return this.productModel.getProduct(id);
  }

  addProduct(product: Record<any, any>): Product | undefined {
    try {
      const incomingProduct: Omit<Product, "id"> = {
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        image: product.image,
      };

      const latesProduct = this.productModel.addProduct(incomingProduct);

      return latesProduct;
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
}

export default ProductsService;
