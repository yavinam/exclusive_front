import { useEffect, useRef, useState } from "react";
import { IProduct } from "../../types";
import Stars from "../stars/Stars";
import CartBtn from "./CartBtn";
import LikeBtn from "./LikeBtn";
import SeeBtn from "./SeeBtn";
import SectionHeader from "../home/UI/SectionHeader";
import SwiperBtns from "../home/UI/SwiperBtns";

const Products = ({ data, title }: { data: any; title: any }) => {
  const swiperRef = useRef(null);
  
    const [time, setTime] = useState({
      days: 5,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    useEffect(() => {
      const countdown = setInterval(() => {
        setTime((prevTime) => {
          const { days, hours, minutes, seconds } = prevTime;
  
          if (seconds > 0) {
            return { ...prevTime, seconds: seconds - 1 };
          }
          if (minutes > 0) {
            return { ...prevTime, minutes: minutes - 1, seconds: 59 };
          }
          if (hours > 0) {
            return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
          }
          if (days > 0) {
            return {
              ...prevTime,
              days: days - 1,
              hours: 23,
              minutes: 59,
              seconds: 59,
            };
          }
  
          return { days: 3, hours: 3, minutes: 3, seconds: 3 };
        });
      }, 1000);
  
      return () => clearInterval(countdown);
    }, []);
  const productItems = data?.products?.map((product: IProduct) => (
    <div
      key={product.id}
      className="w-[300px] h-[400px] rounded-xl shadow-lg overflow-hidden group relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="h-[250px] bg-gradient-to-b from-[#F9F9F9] to-[#E5E5E5] flex justify-center items-center relative group overflow-hidden rounded-xl">
        <img
          src={product.images[1] ? product.images[1] : product.images[0]}
          alt={product.title}
          className="object-contain w-full h-[200px] transition-transform duration-500 group-hover:scale-110"
        />

        {/* Like & See Buttons (DOIM KO‘RINIB TURADI) */}
        <div className="absolute top-14 right-4">
          <LikeBtn product={product} />
        </div>
        <div className="absolute top-2 right-4">
          <SeeBtn product={product} />
        </div>

        {/* Cart Button (HOVER BO‘LGANDA CHIQADI) */}
        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:bottom-4">
          <div className="flex justify-center">
            <CartBtn
              product={product}
            />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col pt-4 px-4 pb-2">
        <h2 className="truncate text-xl font-semibold text-gray-900 hover:text-[#DB4444] transition-colors duration-300">
          {product.title}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2 items-center">
            <p className="text-[#DB4444] font-semibold text-lg">${product.price}</p>
            <Stars rating={product.rating} />
          </div>
          <p className="text-sm text-gray-500 font-medium">({product.stock} in stock)</p>
        </div>
      </div>
    </div>
  ));

  return (
   <>
  <section className="mt-32">
    <div className="container">
      {/* Header qismi */}
      <div className="flex flex-col md:flex-row md:items-center gap-16 mb-8">
        <SectionHeader subtitle="Today's" title="Flash Sales" />
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Days</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.days).padStart(2, "0")}{" "}
              <span className="text-primary ml-2">:</span>
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Hours</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.hours).padStart(2, "0")}{" "}
              <span className="text-primary ml-2">:</span>
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Minutes</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.minutes).padStart(2, "0")}{" "}
              <span className="text-primary ml-2">:</span>
            </h4>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">Seconds</span>
            <h4 className="font-semibold text-2xl text-center tracking-wide">
              {String(time.seconds).padStart(2, "0")}
            </h4>
          </div>
        </div>
        <SwiperBtns swiperRef={swiperRef} />
      </div>

      {/* Mahsulotlar qismi */}
      <h2 className="font-poppins-bold text-3xl mb-6 text-center text-gray-900 max-[620px]:text-2xl">
        {title}
      </h2>
      <div className="flex flex-wrap justify-start gap-[30px] my-7">
        {productItems}
      </div>
    </div>
  </section>
</>

  );
};

export default Products;
