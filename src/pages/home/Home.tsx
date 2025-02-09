import Hero from "../../components/hero/Hero";
// import CategoriesSection from "../../components/home/CategoriesSection";
import CategoriMusic from "../../components/home/CategoriMusic";
// import FlashSales from "../../components/home/FlashSales";
import NewArrival from "../../components/home/NewArrival";
import WorkAbout from "../../components/home/WorkAbout";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../redux/api/products";

const Home = () => {
  const { data } = useGetProductsQuery({});

  return (
    <>
      <Hero />
      {/* <FlashSales/> */}
      {data && <Products data={data} title="" />}
      {/* <CategoriesSection/> */}
      <CategoriMusic/>
      <NewArrival/>
      <WorkAbout/>
    </>
  );
};

export default Home;
