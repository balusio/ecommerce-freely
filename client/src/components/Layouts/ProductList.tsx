import { useLoaderData } from "react-router-dom";
import ProductCard, { Product } from "../ProductCard";
import { useCallback, useEffect, useRef, useState } from "react";
import SearchInput from "../SearchInput";
import PageTitle from "../PageTitle";

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
  try {
    const response = await fetch("http://localhost:3000/products");

    const products = await response.json();

    return { products };
  } catch (e) {
    console.error(e);
    throw new Error((e as Error).message);
    return null;
  }
}

export default function ProductList() {
  const data = useLoaderData() as {
    products: Product[];
  };

  const { products = [] } = data;
  const [filteredProducts, setFilteredProducts] = useState(() => products);
  const productList = useRef<Product[] | null>(null);

  useEffect(() => {
    if (products.length) {
      productList.current = products;
    }
  }, [products]);

  const searchProducts = useCallback(async (value: string) => {
    if (value.length > 2) {
      const data = await searchProduct(value);

      if (data) {
        setFilteredProducts(data);
      }
    } else {
      // if clear the search, get the default query list
      if (productList.current) {
        setFilteredProducts(productList.current);
      }
    }
  }, []);

  if (!data) return null;

  return (
    <>
      <PageTitle>Give Freely Products</PageTitle>
      <div id="product-list">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <SearchInput onChange={searchProducts} />
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filteredProducts.length ? (
                filteredProducts.map((product: Product) => (
                  <ProductCard {...product} key={product.id} />
                ))
              ) : (
                <p className="text-gray-700">No Products founds, try again</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
