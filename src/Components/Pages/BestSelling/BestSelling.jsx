import { LuFlame } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import axios from "axios";

const BestSelling = ({ apiUrl, dataKey }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [bestSelling, setBestSelling] = useState(null);

  const fetchBestSelling = async () => {
    try {
      let res = await axios.get(apiUrl);
      setBestSelling(res.data[dataKey]);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchBestSelling();
  }, []);

  // Converts English digits to Persian digits
  function toPersianNumber(number) {
    return String(number).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }
  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0 overflow-x-hidden mt-5 mb-5">
      <div className="w-full flex flex-col py-4 bg-white lg:rounded-2xl lg:border lg:border-[#e0e0e2]">
        {/* Title */}
        <div className="w-full flex justify-between lg:justify-center items-center px-2 lg:px-5 relative">
          <div className="flex justify-center items-center mb-3">
            <div className="flex ml-2">
              <LuFlame className="w-[24px] h-[24px] text-[#f9a825]" />
            </div>
            {bestSelling?.map((best, index) => {
              return (
                <p
                  key={index}
                  className="text-[#0c0c0c] lg:text-[21px] text-[18px] font-Bold"
                >
                  {best.maintitle}
                </p>
              );
            })}
          </div>
          <div>
            <button className="relative lg:absolute left-0 top-0 pl-4 shrink-0 rounded-lg flex items-center text-[#19bfd3]">
              <div className="flex items-center justify-center relative grow">
                مشاهده همه
              </div>
            </button>
          </div>
        </div>
        {/* Slider */}
        <div className="relative min-h-[330px]">
          {/* Prev Button */}
          <button
            ref={nextRef}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-100"
            aria-label="بعدی"
          >
            <MdKeyboardArrowLeft className="text-2xl text-gray-700" />
          </button>
          {/* Next Button */}
          <button
            ref={prevRef}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 items-center justify-center shadow hover:bg-gray-100"
            aria-label="قبلی"
          >
            <MdKeyboardArrowRight className="text-2xl text-gray-700" />
          </button>
          <Swiper
            dir="rtl"
            modules={[Navigation, Grid]}
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
            slidesPerView={4}
            spaceBetween={0}
            grid={{
              rows: 3,
              fill: "row",
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                grid: { rows: 3, fill: "row" },
              },
              640: {
                slidesPerView: 3,
                grid: { rows: 3, fill: "row" },
              },
              1024: {
                slidesPerView: 4,
                grid: { rows: 3, fill: "row" },
              },
            }}
          >
            {bestSelling?.slice(1).map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="flex flex-row-reverse items-center justify-between border-b border-[#f0f0f1] py-3 px-2 h-[100px] font-Regular">
                    {/* Product Info */}
                    <div className="flex flex-col flex-1 items-statr pr-2">
                      <span className="text-[#23254e] text-[12px] font-medium text-right line-clamp-2">
                        {item.title_fa}
                      </span>
                    </div>
                    {/* Product Number */}
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                      <span className="text-[#19bfd3] text-[26px] font-Bold">
                        {toPersianNumber(item.id)}
                      </span>
                    </div>
                    {/* Product Image */}
                    <div className="flex-shrink-0 flex items-center justify-center w-[86px] h-[86px]">
                      <img
                        src={item.url}
                        alt={item.title_fa}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
