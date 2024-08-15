import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Layouts/Root";
import ErrorComponent from "./components/Error";
import Product, { loader as productLoader } from "./components/Layouts/Product";
import ProductList, {
  loader as productsLoader,
} from "./components/Layouts/ProductList";
import AddProduct from "./components/Layouts/AddProductForm";

const ROUTES = {
  home: "/",
  product: (id: number | string) => `/products/${id}`,
  addProduct: "/products/add",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <ProductList />,
        errorElement: <ErrorComponent />,
        loader: productsLoader,
      },

      {
        path: "products/:productId",
        errorElement: <ErrorComponent />,
        element: <Product />,
        loader: productLoader,
      },
      {
        path: "products/add",
        errorElement: <ErrorComponent />,
        element: <AddProduct />,
      },
    ],
  },
]);

export { router as default, ROUTES };
