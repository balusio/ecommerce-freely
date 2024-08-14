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
  public static getProduct(id: number): Product | undefined {
    const products = cache.getCache("products");
    const product = products.filter((product: Product) => product.id === id);

    return product;
  }

  public static addProduct(product: Product): Products[] {
    const valuesUpdated = cache.updateCache("products", (values) => {
      return [...values, product];
    });
    return valuesUpdated;
  }

  public static updateProduct(product: Product): Products[] {
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
