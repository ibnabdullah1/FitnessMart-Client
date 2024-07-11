import { createBrowserRouter } from "react-router-dom";
import CategoryBasedProducts from "../components/AllCategory/CategoryBasedProducts";
import OrderHistorys from "../components/OrderHistorys";
import Payment from "../components/Payment";
import ShoppingCart from "../components/ShoppingCart";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/Poducts/ProductDetails";
import Products from "../pages/Poducts/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:1000/api/products/${params.id}`),
      },
      {
        path: "products/category/:category",
        element: <CategoryBasedProducts />,
      },
      {
        path: "checkout",
        element: <Payment />,
      },
      {
        path: "order-history",
        element: <OrderHistorys />,
      },
    ],
  },
]);
