import { createBrowserRouter } from "react-router-dom";
import CategoryBasedProducts from "../components/AllCategory/CategoryBasedProducts";
import OrderHistorys from "../components/OrderHistorys";
import Payment from "../components/Payment";
import AddProduct from "../components/Products/AddProduct";
import ProductsList from "../components/Products/ProductsList";
import UpdateProduct from "../components/Products/UpdateProduct";
import ShoppingCart from "../components/ShoppingCart";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Team from "../pages/AboutUs/Team";
import Contact from "../pages/Contact";
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
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product-management",
        element: <ProductsList />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(
            `https://fitness-mart-server.vercel.app/api/products/${params.id}`
          ),
      },
      {
        path: "products/update/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(
            `https://fitness-mart-server.vercel.app/api/products/${params.id}`
          ),
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
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "our-team",
        element: <Team />,
      },
    ],
  },
]);
