import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import NotFound from "../pages/notfound/Notfound";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import SignUp from "../pages/register/sign-up/SignUp";
import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import SignIn from "../pages/register/sign-in/SignIn";
import Detail from "../pages/detail/Detail";
import Checkout from "../pages/checkout/Checkout";
// import Shop from "../pages/shop/Shop";

const Routers = () => {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
        { path: "/sign-up", element: <SignUp /> },
        { path: "/sign-in", element: <SignIn /> },
        { path: "/cart", element: <Cart /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/product/:id", element: <Detail /> },
        { path: "/checkout", element: <Checkout/>}
        // { path: "/shop/:id", element: <Shop /> }
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return useRoutes(routes);
};

export default Routers;
