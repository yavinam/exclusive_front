import { ReactNode, MutableRefObject } from "react";
import SwiperCore, { } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface AppSwiperProps {
  children: ReactNode;
  swiperRef: MutableRefObject<SwiperCore | null>;
  rows?: number;
}

const AppSwiper: React.FC<AppSwiperProps> = ({ children, swiperRef, rows = 1 }) => {
  return (
    <Swiper
      // modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={rows}
      navigation
      onSwiper={(swiper) => (swiperRef.current = swiper as SwiperCore)} 
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
    >
      {children}
    </Swiper>
  );
};

export default AppSwiper;
