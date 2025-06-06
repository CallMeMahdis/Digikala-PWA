import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchStories } from "../../Redux/Stories/ActionStories";

const StoriesSlider = () => {
  const { stories } = useSelector((state) => state.stories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div className="w-full h-[160px] px-2 py-3 max-w-full overflow-hidden bg-white relative">
      {/* Custom Navigation Buttons */}
      <button
        className="stories-swiper-prev absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-gray-100 z-10"
        aria-label="قبلی"
      >
        <MdKeyboardArrowRight className="text-2xl text-gray-700" />
      </button>
      <button
        className="stories-swiper-next absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-gray-100 px-1 z-10"
        aria-label="بعدی"
      >
        <MdKeyboardArrowLeft className="text-2xl text-gray-700" />
      </button>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".stories-swiper-next",
          prevEl: ".stories-swiper-prev",
        }}
        spaceBetween={12}
        slidesPerView="auto"
        className="!overflow-visible"
      >
        {stories.map((story, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-[90px] !h-[140px] flex flex-col items-center !ml-6"
          >
            <div className="relative flex flex-col items-center">
              <div className="p-[3px] bg-gradient-to-tr from-[#e1006a] via-[#c300ff] to-[#fdc800] rounded-full cursor-pointer">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-[84px] h-[84px] object-cover rounded-full border-2 border-white"
                />
                {story.subtitle && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 text-[#e03e97] bg-[#fdecf5] text-xs font-bold px-1.5 rounded-[10px] shadow leading-[2.17] border border-white">
                    {story.subtitle}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-3 text-center text-[11px] font-medium text-[#3f4064] leading-[2.17] w-[90px] line-clamp-2">
              {story.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoriesSlider;
