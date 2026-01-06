import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";

const banners = [
  { img: "/AdsBannerSlider-images/01.png", key: "01" },
  { img: "/AdsBannerSlider-images/02.png", key: "02" },
  { img: "/AdsBannerSlider-images/03.png", key: "03" },
  { img: "/AdsBannerSlider-images/04.png", key: "04" },
  { img: "/AdsBannerSlider-images/05.png", key: "05" },
  { img: "/AdsBannerSlider-images/06.png", key: "06" },
];

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        spaceBetween={6}
        slidesPerView={props.items}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper !p-5"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 7,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="box bannerBox group">
              <Link to="/">
                <img
                  src={banner.img}
                  alt={banner.key}
                  className="w-full rounded-sm group-hover:scale-102! transition-all"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
