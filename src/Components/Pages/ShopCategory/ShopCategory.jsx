import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopCategory } from "../../Redux/ShopCategory/ActionShopCategory";

export default function ShopCategory() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { shopCategories } = useSelector((state) => state.shopCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopCategory());
  }, []);

  return (
    <div className="w-full max-w-[1336px] mx-auto px-2 py-8 overflow-x-hidden">
      <h2 className="lg:text-[21px] text-[18px] font-Medium text-center mb-8">
        خرید بر اساس دسته‌بندی
      </h2>
      <div className="relative">
        {/* Prev Button */}
        <button
          ref={nextRef}
          className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-12 h-12 items-center justify-center shadow hover:bg-gray-100"
          aria-label="قبلی"
        >
          <MdKeyboardArrowLeft className="text-3xl text-gray-700" />
        </button>
        {/* Next Button */}
        <button
          ref={prevRef}
          className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-12 h-12 items-center justify-center shadow hover:bg-gray-100"
          aria-label="بعدی"
        >
          <MdKeyboardArrowRight className="text-3xl text-gray-700" />
        </button>
        <Swiper
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
          slidesPerView={7}
          spaceBetween={8}
          grid={{
            rows: 2,
            fill: "row",
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              grid: { rows: 3, fill: "row" },
            },
            1024: {
              slidesPerView: 7,
              grid: { rows: 2, fill: "row" },
            },
            1280: {
              slidesPerView: 8,
              grid: { rows: 2, fill: "row" },
            },
          }}
          className="overflow-hidden"
        >
          {shopCategories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="flex flex-col items-center mb-6 cursor-pointer">
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-white">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </div>
                <span className="text-center text-[12px] font-Medium mt-1">
                  {cat.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
