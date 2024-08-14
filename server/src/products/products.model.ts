import CacheInstance from "../util/nodeCache";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type Products = Product[];

const cache = CacheInstance.getInstance();

class ProductModel {
  constructor() {
    this.getProduct = this.getProduct.bind(this);
  }
  getAllProducts() {
    console.log("inside model");
    return cache.getCache("products");
  }

  getProduct(id: number): Product | undefined {
    if (cache.hasCache("products")) {
      const products = cache.getCache("products");
      const product = products.filter((product: Product) => product.id === id);
      if (product.length) {
        return product[0];
      }

      return undefined;
    }

    return undefined;
  }

  addProduct(product: Omit<Product, "id">): Product | undefined {
    let latestID;
    const valuesUpdated = cache.updateCache("products", (values) => {
      latestID = values[values.length - 1].id + 1;

      return [...values, { id: latestID, ...product }];
    });

    if (latestID) {
      return this.getProduct(latestID);
    }

    return undefined;
  }

  updateProduct(product: Product): Products[] {
    const valuesUpdated = cache.updateCache("products", (values) => {
      return values.map((cachedProduct: Product) => {
        if (cachedProduct.id === product.id) {
          return {
            ...cachedProduct,
            ...product,
          };
        }
      });
    });
    return valuesUpdated;
  }

  public static deleteProduct(id: number): boolean {
    const updatedProducts = cache.updateCache("products", (values) => {
      return values.filter((product: Product) => product.id !== id);
    });

    return updatedProducts;
    return false;
  }
}

export default ProductModel;
export type { Product };
