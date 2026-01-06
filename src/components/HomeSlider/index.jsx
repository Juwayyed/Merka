import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "./style.css";

const sliderImages = [
  { img: "/HomeSlider-images/Slider-1.jpg" },
  { img: "/HomeSlider-images/Slider-2.jpg" },
  { img: "/HomeSlider-images/Slider-3.jpg" },
  { img: "/HomeSlider-images/Slider-4.jpg" },
  { img: "/HomeSlider-images/Slider-5.jpg" },
];

const HomeSlider = () => {
  return (
    <div className="homeSlider">
      <div className="container mt-3!">
        <Swiper
          modules={[Navigation, Autoplay, FreeMode, Pagination]}
          navigation={true}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={10}
          className="sliderHome py-3"
          breakpoints={{
            768: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 30,
            },
          }}
        >
          {sliderImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src={slide.img}
                  alt={`Slider Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
