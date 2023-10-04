import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import './styles.css';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpeg";
import slide3 from "../../assets/images/slide3.jpg";
// import slide4 from "../../assets/images/slide4.png";

const CarouselFeatured = () => {
  return (
    <div className="m-0 md:m-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
        pagination={false}
        navigation={false}
      >
        <SwiperSlide>
          <img src={slide1} className="h-96 w-full rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="h-96 w-full rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} className="h-96 w-full rounded-xl" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slide4} className="h-96 w-full rounded-xl" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default CarouselFeatured;
