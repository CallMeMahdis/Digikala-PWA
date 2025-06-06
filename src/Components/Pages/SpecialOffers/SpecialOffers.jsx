import { useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecialOffers } from "../../Redux/SpecialOffers/ActionSpecialOffers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SpecialOffers = () => {
  const { offers } = useSelector((state) => state.offers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecialOffers());
  }, [dispatch]);
  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:rounded-lg overflow-hidden bg-[linear-gradient(225deg,_#d22c4e,_#ee384e_41.68%,_#ef5662)]">
        {/* Right Section (Title & Icon) */}
        <a
          className="lg:w-[126px] w-full lg:h-full flex justify-between lg:items-center flex-row lg:flex-col gap-3 px-4 lg:px-0 pt-5 pb-3 lg:!py-0 z-10 mx-3 shrink-0"
          href="#"
        >
          <div className="flex flex-row justify-center items-center lg:flex-col gap-2 lg:gap-3">
            <div className="text-lg font-bold leading-tight text-center hidden lg:block">
              {/* Desktop */}
              <img
                className="inline-block object-contain w-[88px] h-[88px]"
                src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
                alt=""
              />
            </div>
            <div className="order-2 lg:order-1 w-[108px] h-[20px] leading-0 lg:hidden">
              {/* Mobile */}
              <img
                className="inline-block object-contain"
                src="https://www.digikala.com/statics/img/svg/typography/incredible-word.svg"
              />
            </div>
            <div className="flex items-center h-6 order-3 lg:order-2 gap-0.5">
              <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm"></div>
              <div className="text-white w-1">:</div>
              <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm"></div>
              <div className="text-white w-1">:</div>
              <div className="flex flex-col items-center justify-center bg-white w-[26px] h-[26px] rounded-sm"></div>
            </div>
            <div className="order-1 lg:order-3 leading-0">
              <img
                className="lg:w-[80px] ;g:h-[80px] w-[24px] h-[24px] inline-block object-contain"
                src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center text-white text-[12px] mt-3">
            مشاهده همه
            <div className="flex">
              <MdKeyboardArrowLeft className="w-[18px] h-[18px]" />
            </div>
          </div>
        </a>
        <div className="w-full flex flex-nowrap pb-5 lg:py-5 lg:pr-0 justify-stretch overflow-hidden relative lg:rounded-lg pr-5">
          <div className="swiper-container">
            {/* Swiper Section */}
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".special-swiper-prev",
                prevEl: ".special-swiper-next",
              }}
              spaceBetween={4}
              slidesPerView={7}
              allowTouchMove={false}
              breakpoints={{
                0: { slidesPerView: 2 },
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
            >
              {/* Slides */}
              {offers.map((offer, idx) => (
                <SwiperSlide
                  key={offer.id}
                  className={`lg:!w-[160px] !w-[140px] bg-white flex flex-col items-center py-3 px-2
        ${idx === 0 ? "rounded-r-2xl lg:rounded-r-3xl" : ""}
        ${idx === offers.length - 1 ? "rounded-l-2xl lg:rounded-l-3xl" : ""}
      `}
                >
                  <div className="flex items-center justify-center w-full h-[120px] mb-3 cursor-pointer">
                    <img
                      src={offer.url}
                      alt={offer.title_fa}
                      className="max-w-[120px] max-h-[120px] object-contain"
                    />
                  </div>
                  <div className="text-[12px] min-h-[40px] text-[#62666d] font-Regular text-center line-clamp-2 mb-3">
                    {offer.title_fa}
                  </div>
                  <div className="flex items-center justify-between w-full mt-2">
                    <span className="bg-[#d32f2f] text-white text-xs rounded-full px-2 py-0.5 font-bold">
                      {offer.discount}
                    </span>
                    <span className="text-[#3f4064] lg:text-[14px] font-Bold mb-1 text-left text-[12px]">
                      {offer.final_price} تومان
                    </span>
                  </div>
                  <div className="w-full text-left text-[12px] text-[#c0c2c5] line-through pl-9">
                    {offer.price}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Next Button at the left side */}
            <button
              className="special-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
              aria-label="قبلی"
            >
              <MdKeyboardArrowLeft className="text-2xl text-gray-700" />
            </button>
            {/* Prev Button at the right side */}
            <button
              className="special-swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
              aria-label="بعدی"
            >
              <MdKeyboardArrowRight className="text-2xl text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
