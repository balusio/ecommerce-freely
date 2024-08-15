import { Product, QuerySearchObject } from "../types";
import CacheInstance from "../util/nodeCache";
import ProductModel from "./products.model";

const cache = CacheInstance.getInstance();

class ProductsService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
    this.getAllProducts = this.getAllProducts.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }

  getAllProducts(query: QuerySearchObject): Product[] {
    const products = this.productModel.getAllProducts();
    const isEmptySearchQuery = Object.keys(query).length === 0;
    if (isEmptySearchQuery) {
      return products;
    } else {
      // limit the product length that will return
      const filteredProducts = query["limit"]
        ? products.slice(0, parseInt(query["limit"]))
        : [...products];

      // if there's some query params filter the products search result
      return filteredProducts.filter((product: Product) => {
        for (const property in query) {
          switch (property) {
            case "title":
              return product.title.toLowerCase().includes(query[property]);

            case "category":
              return product.category === query[property];
            case "id":
              return product.id === parseInt(query[property]);

            case "price":
              return product.price === parseInt(query[property]);

            default:
              return true;
          }
        }
      });
    }
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
