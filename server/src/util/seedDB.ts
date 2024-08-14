import CacheInstance from "./nodeCache";

const cache = CacheInstance.getInstance();

const seedDB = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      console.log(json, " json loaded");
      cache.setCache({ key: "products", val: json });
      console.log("======== DB SEEDED=====");
    });
};

export default seedDB;
