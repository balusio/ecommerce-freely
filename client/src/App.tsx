import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Root from "./Root";
import ErrorComponent from "./components/Error";
import Product from "./components/Product";
import ProductList, {
  loader as productsLoader,
} from "./components/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <ProductList />,
        loader: productsLoader,
      },

      {
        path: "product/:productId",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
