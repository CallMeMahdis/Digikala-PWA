import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider } from "../../Redux/Slider/ActionSlider";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Slider() {
  const { slides } = useSelector((state) => state.slides);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlider());
  }, [dispatch]);
  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <div className="absolute flex gap-2 bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition">
        <button
          className="slider-swiper-prev bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          aria-label="Previous"
        >
          <MdKeyboardArrowRight className="text-3xl text-gray-700" />
        </button>
        <button
          className="slider-swiper-next bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          aria-label="Next"
        >
          <MdKeyboardArrowLeft className="text-3xl text-gray-700" />
        </button>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".slider-swiper-next",
          prevEl: ".slider-swiper-prev",
        }}
        className="mySwiper mt-3.5"
      >
        {slides?.map((slide) => {
          return (
            <SwiperSlide
              key={slide.id}
              className="lg:!h-[400px] !h-[190px] md:!h-[220px] cursor-pointer"
            >
              <img
                className="w-full h-full inline-block object-center object-cover rounded-2xl lg:rounded-none"
                src={slide.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
