import { Form, Link, useLoaderData } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";
import { useCallback, useEffect, useRef, useState } from "react";
import SearchInput from "./SearchInput";

const searchProduct = async (param: string): Promise<Product[] | null> => {
  try {
    const response = await fetch(
      `http://localhost:3000/products?title=${param}`,
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error((e as Error).message);
    return null;
  }
};

export async function loader() {
  const response = await fetch("http://localhost:3000/products");
  const products = await response.json();

  return { products };
}

export default function ProductList() {
  const { products } = useLoaderData() as any;
  const [filteredProducts, setFilteredProducts] = useState(() => products);
  const productList = useRef(null);

  useEffect(() => {
    if (products.length) {
      productList.current = products;
    }
  }, [products]);

  const searchProducts = useCallback(async (value: string) => {
    if (value.length > 2) {
      const data = await searchProduct(value);

      if (data && data.length) {
        setFilteredProducts(data);
      }
    } else {
      // if clear the search, get the default query list
      setFilteredProducts(productList.current);
    }
  }, []);

  return (
    <div id="product-list">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <SearchInput onChange={searchProducts} />
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product: Product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
