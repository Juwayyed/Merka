import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";

const categories = [
  { img: "/HomeCategorySlider - images/Slider-1.png", title: "Smart Tablet" },
  { img: "/HomeCategorySlider - images/Slider-2.png", title: "Orange T-Shirt" },
  { img: "/HomeCategorySlider - images/Slider-3.png", title: "Wrist Watch" },
  { img: "/HomeCategorySlider - images/Slider-4.png", title: "Gold Rings" },
  { img: "/HomeCategorySlider - images/Slider-5.png", title: "Velvet Chair" },
  { img: "/HomeCategorySlider - images/Slider-6.png", title: "Hiking Shoes" },
  { img: "/HomeCategorySlider - images/Slider-7.png", title: "Hair Oil" },
  { img: "/HomeCategorySlider - images/Slider-8.png", title: "Leather Purse" },
  {
    img: "/HomeCategorySlider - images/Slider-9.png",
    title: "XBOX Controller",
  },
];

const HomeCategorySlider = () => {
  return (
    <div className="homeCategorySlider">
      <div className="container !mt-4 py-8 pt-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          spaceBetween={6}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper !p-5"
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="item p-3 bg-white rounded-sm text-center flex flex-col justify-center items-center shadow-md !min-h-[160px] hover:shadow-md transition-shadow cursor-pointer border border-black/10">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-[100px] h-[100px] object-contain mb-2 transition-all"
                />
                <h3 className="text-[14px] font-semibold">{cat.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCategorySlider;
