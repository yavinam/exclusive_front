import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ToTopBtn from "../components/home/UI/ToTopBtn";

const Layout = () => {
  return (
    <>
      <ToTopBtn/>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
