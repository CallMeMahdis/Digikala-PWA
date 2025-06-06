import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbCameraSearch } from "react-icons/tb";
import "swiper/css";
import { IoSearch } from "react-icons/io5";
import { LuArrowRight, LuFlame } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const searchItems = [
  "موتوربرق",
  "استند آرایشی",
  "کتاب",
  "چراغ شارژری",
  "پاوربانک",
];

const SearchBoxMobile = () => {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* Search Input */}
      <div className="relative flex items-center w-full px-4 py-2 bg-gray-100 rounded-md h-[40px] max-w-full sm:px-4 search-mobile">
        {/* Right Icon */}
        <IoSearch className="text-gray-500 w-[24px] h-[24px] mr-2 ml-1 xs:w-[20px] xs:h-[20px] xs:mr-1" />
        {/* Right Image in a Tag */}
        <div className="flex gap-1 items-center">
          <span className="text-neutral-500 opacity-70 font-Medium text-[13px] whitespace-nowrap">
            جستجو در
          </span>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[61px] h-[16px] leading-0 xs:w-[12px] xs:h-[12px]"
          >
            <img
              src="https://www.digikala.com/brand/typography.svg"
              alt="Example Icon"
              className="w-full inline-block object-contain"
            />
          </a>
        </div>
        <input
          type="text"
          placeholder=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleClickOpen}
          className="flex-grow px-2 py-1 border-none outline-none bg-transparent cursor-pointer min-w-0 xs:text-[12px]"
        />

        {/* Left Icon */}
        <TbCameraSearch className="text-[#7f53ef] w-[24px] h-[24px] ml-2 xs:w-[20px] xs:h-[20px] xs:ml-1" />
      </div>

      {/* Dialog */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {/* Custom Search Bar Inside Modal */}
        <div className="flex items-center w-[956px] max-w-full px-3 mx-4 mt-3 py-2 bg-[#f0f0f1] rounded-md sticky top-0 z-10 h-[40px]">
          {/* Right Icon */}
          <IconButton onClick={handleClose} aria-label="close">
            <LuArrowRight className="text-[#81858b]" />
          </IconButton>
          <input
            type="text"
            placeholder=""
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-2 py-1 border-none outline-none bg-transparent placeholder:text-[#8a8a8a]"
          />
        </div>

        {/* Swiper for Trending Searches */}
        <div className="p-4">
          <div className="py-2 hidden-scrollbar">
            <span className=" cursor-pointer block px-5 lg:px-4 xs:py-2">
              <div className="flex justify-between items-start">
                <div className="flex shrink-0 ml-4 mt-0.5">
                  <LuFlame className="w-[25px] h-[25px] text-[#a1a3a8]" />
                </div>
                <div className="grow text-right">
                  <span className="grow text-[#3f4064] font-Bold leading-8 text-[13px]">
                    جستجوهای پرطرفدار
                  </span>
                </div>
              </div>
            </span>
            <div className="flex w-full">
              <div className="w-full gap-2 p-2.5">
                <Swiper spaceBetween={10} slidesPerView="auto">
                  {searchItems.map((item, index) => {
                    return (
                      <SwiperSlide key={index} className="!w-auto">
                        <button className="px-2 py-2 rounded-full border border-[#e0e0e0] bg-white text-[#3f4064] font-Bold whitespace-nowrap cursor-pointer flex items-center gap-2 text-[12px]">
                          {item}
                          <span>
                            <MdKeyboardArrowLeft className="text-neutral-700 font-Bold" />
                          </span>
                        </button>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default SearchBoxMobile;
