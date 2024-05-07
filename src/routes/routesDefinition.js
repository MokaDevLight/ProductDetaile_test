import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const ProductDetaile = lazy(() =>
  import("components/pages/ProductDetaile/ProductDetaile")
);

export const router = createBrowserRouter([
  {
    path: "/product_detailes",
    element: <ProductDetaile />,
  },
]);
