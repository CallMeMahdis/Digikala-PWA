import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { useDispatch, useSelector } from "react-redux";
import { PiStarBold } from "react-icons/pi";
import { fetchPopularBrands } from "../../Redux/PopularBrands/ActionPopularBrands";

export default function PopularBrands() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { brands } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularBrands());
  }, []);

  return (
    <div className="w-full max-w-[1336px] mx-auto px-2 py-8 overflow-x-hidden">
      <div className="w-full py-6 lg:rounded-2xl lg:border border-[#e0e0e2]">
        <div className="flex justify-center gap-2 mb-2.5">
          <PiStarBold className="w-[22px] h-[22px] text-[#f9bc00]" />
          <h2 className="contents lg:text-[21px] text-[18px] font-Bold text-center mb-8">
            محبوب ترین برندها
          </h2>
        </div>
        <div className="relative min-h-[160px]">
          {/* Prev Button */}
          <button
            ref={nextRef}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#f0f0f1] border border-gray-200 rounded-full w-12 h-12 items-center justify-center shadow hover:bg-gray-100"
            aria-label="قبلی"
          >
            <MdKeyboardArrowLeft className="text-3xl text-gray-700" />
          </button>
          {/* Next Button */}
          <button
            ref={prevRef}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#f0f0f1] border border-gray-200 rounded-full w-12 h-12 items-center justify-center shadow hover:bg-gray-100"
            aria-label="بعدی"
          >
            <MdKeyboardArrowRight className="text-3xl text-gray-700" />
          </button>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={7}
            spaceBetween={5}
            breakpoints={{
              0: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 9,
              },
              1280: {
                slidesPerView: 10,
              },
            }}
            className="overflow-hidden"
          >
            {brands?.map((brand) => (
              <SwiperSlide key={brand.id}>
                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-center justify-center bg-[#f0f0f1]">
                    <img
                      src={brand.logo.url}
                      alt={brand.title_fa}
                      className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
