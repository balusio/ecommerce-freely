import CacheInstance from "./nodeCache";

const cache = CacheInstance.getInstance();

/**
 * This is a generic DB seeded from fakestoreapi
 * @see https://fakestoreapi.com/products
 * it dependes on node-cache to save the data on memory
 */
const seedDB = () => {
  if (cache.hasCache("products")) {
    console.log("---DB ALREADY SEEDED, SKIPING NEW SEED---");
  } else {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        cache.setCache({ key: "products", val: json });
        console.log("======== DB SEEDED ========");
      });
  }
};

export default seedDB;
