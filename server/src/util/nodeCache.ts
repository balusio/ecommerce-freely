const NodeCache = require("node-cache");

type CacheParams = {
  key: string;
  val: any;
  ttl?: number;
};

const DEFAULT_CACHE_TIME = 1000000;

/**
 * cache interface to manipulate products from cache-node
 * @see https://www.npmjs.com/package/node-cache
 */
class CacheInstance {
  private static _instance: CacheInstance;
  private cache: any;

  private constructor(config?: any) {
    this.cache = new NodeCache({ stdTTL: 100, checkperiod: 120, ...config });
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new CacheInstance();
    return this._instance;
  }

  getCache(key: string) {
    return this.cache.get(key);
  }

  getMultipleCache(keys: string[]) {
    return this.cache.mget(keys);
  }

  setCache({ key, val, ttl = DEFAULT_CACHE_TIME }: CacheParams) {
    this.cache.set(key, val, ttl);
  }

  setMultipleCache(params: CacheParams[]) {}

  updateCache(key: string, callback: (val: any) => any): any {
    if (this.cache.has(key)) {
      const value = this.cache.take(key);
      const updatedValue = callback(value);
      this.setCache({
        key,
        val: updatedValue,
      });

      return this.getCache(key);
    } else {
      console.error(`Error, object ${key}, doesn't exists`);
      throw new Error("could not create product");
    }
  }

  deleteCache(key: string): boolean {
    this.cache.del(key);
    return !this.cache.has(key);
  }

  hasCache(key: string): boolean {
    return this.cache.has(key);
  }
}

export default CacheInstance;
