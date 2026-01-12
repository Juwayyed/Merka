import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../ProductItem";

const ProductsSlider = (props) => {
  return (
    <div className="productsSlider py-3!">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={10}
        slidesPerView={props.items}
        className="mySwiper py-5! px-16!"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
