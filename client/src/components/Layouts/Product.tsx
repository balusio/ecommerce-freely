import { useLoaderData } from "react-router-dom";
import ButtonComponent from "../Button";
import RelatedProducts from "../RelatedProducts";
import PageTitle from "../PageTitle";

export async function loader({ params }: any) {
  const response = await fetch(
    `http://localhost:3000/products/${params.productId}`,
  );
  const product = await response.json();

  return { product };
}

export default function Product() {
  const { product = {} } = useLoaderData() as any;

  return (
    <>
      <PageTitle>{product.title}</PageTitle>
      <div className="bg-white p-4 lg:p-0">
        <div className="pt-6">
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="col-span-2 w-full overflow-hidden rounded-lg lg:block">
              <img
                alt={product.title}
                src={product.image}
                className="m-auto h-auto w-full max-w-[300px] object-cover object-center"
              />
              <RelatedProducts category={product.category} />
            </div>
            <div className="text-start lg:border-l lg:border-gray-200 lg:pl-8">
              <div className="my-8 space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
              <p className="my-5 text-3xl tracking-tight text-gray-900">
                $ {product.price}
              </p>

              <ButtonComponent variant="primary">purchase</ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
