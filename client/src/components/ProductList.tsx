import { Form, Link, useLoaderData } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";

export async function loader() {
  const response = await fetch("http://localhost:3000/products");
  const products = await response.json();

  return { products };
}

export default function ProductList() {
  const { products } = useLoaderData() as any;

  console.log(products, " products");
  return (
    <div id="product-list">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product: Product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
