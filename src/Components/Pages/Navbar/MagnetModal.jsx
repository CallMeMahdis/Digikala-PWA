import { BiBell } from "react-icons/bi";
import { GoBookmark } from "react-icons/go";
import { FaRegComment, FaRegHeart } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdOutlineShare } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbDeviceMobile } from "react-icons/tb";
import "swiper/css";
const MagnetModal = () => {
  return (
    <div className="grow flex flex-col pb-[54px] pt-0">
      <div className="flex flex-col grow bg-white">
        <div className="w-full h-full flex flex-col items-center gap-4 mb-4 overflow-x-hidden">
          <div className="w-full max-w-[768px] rounded-2xl pb-4">
            {/* Header */}
            <section className="flex items-center justify-between px-4 shadow">
              <div>
                <ul className="flex relative">
                  <li className="relative flex flex-row items-center grow justify-center cursor-pointer px-2 py-3 text-[13px] leading-[2.15] text-[#ef4056] border-b-4 border-b-[#ef4056]">
                    <div className="font-Bold">گشت‌وگذار</div>
                  </li>
                  <li className="relative flex flex-row items-center grow justify-center cursor-pointer px-2 py-3 text-[13px] leading-[2.15] text-[#81858b]">
                    <div className="font-Medium">پرس‌وجو</div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-end gap-5">
                <a className="style-inherint" href="#">
                  <div className="flex relative">
                    <BiBell className="w-[25px] h-[25px] text-[#424750]" />
                    <span className="absolute flex items-center justify-center text-[10px] leading-[2.17] bg-[#ef4056] text-white w-[20px] h-[11px] rounded-md top-[55%] left-[33%]">
                      ۰
                    </span>
                  </div>
                </a>
                <a className="style-inherint" href="#">
                  <div className="shrink-0 ml-2">
                    <img
                      className="w-[32px] h-[32px] object-contain inline-block rounded-full"
                      src="https://www.digikala.com/statics/img/svg/profile/magnet-default-avatart.svg"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </section>
            {/* Divider */}
            <div className="py-1 bg-[#f5f5f5]"></div>
            {/* Content */}
            <section className="bg-white mt-1">
              <section className="flex justify-between items-center px-4 py-2">
                <a className="style-inherint" href="#">
                  <div className="flex justify-between items-center">
                    <div className="shrink-0 ml-2">
                      <img
                        className="w-[32px] h-[32px] inline-block object-contain rounded-full"
                        src="https://dkstatics-public.digikala.com/digikala-content-x-profile/63bed377c2db99c43f6e9cdd887a58c7772ef5a1_1726353588.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80"
                        alt=""
                      />
                    </div>
                    <span className="text-[12px] text-[#3f4064] leading-[2.17]">
                      Mojgan.Ebadi
                    </span>
                  </div>
                </a>
                <button className="relative flex items-center bg-[#ef4056] text-white w-[78px] py-1 px-3 rounded-lg whitespace-nowrap">
                  <div className="flex items-center justify-center relative grow text-[12px] leading-[2.17] font-Bold">
                    دنبال کردن
                  </div>
                </button>
              </section>
              <div className="flex mb-2 relative h-auto">
                <div
                  className="w-full relative flex justify-center bg-black"
                  style={{ aspectRatio: "4/3" }}
                >
                  <div className="w-full flex justify-center bg-black aspect-[9/16] relative overflow-hidden">
                    <Swiper className="w-full h-full">
                      <SwiperSlide>
                        <video
                          className="w-full h-full object-contain bg-black"
                          autoPlay
                          controls={true}
                          loop
                          muted
                        >
                          <source
                            src="https://dkstatics-public.digikala.com/digikala-content-x-post-media/50f84d6e7951aaf3a65e77bca193b44ae5683241_1748755771.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 text-[#424242]">
                <div className="flex items-center justify-center focus:outline-none select-none">
                  <div className="flex items-center ml-3">
                    <div className="flex">
                      <FaRegHeart className="w-[22px] h-[22px] text-[#424750]" />
                    </div>
                  </div>
                  <span className="flex items-center ml-3">
                    <div className="flex mr-1">
                      <FaRegComment className="w-[22px] h-[22px] text-[#424750]" />
                    </div>
                  </span>
                  <span className="flex items-center">
                    <div className="flex cursor-pointer">
                      <MdOutlineShare className="w-[22px] h-[22px] text-[#424750] rotate-180" />
                    </div>
                  </span>
                </div>
                <span className="flex items-center cursor-pointer text-[14px] leading-[2.15]">
                  <div className="flex">
                    <GoBookmark className="w-[22px] h-[22px] text-[#424750]" />
                  </div>
                </span>
              </div>
              <div className="flex items-center justify-start pr-5 my-3">
                <div className="flex justify-between items-center relative">
                  <div className="shrink-0 ml-2">
                    <img
                      className="inline-block object-contain rounded-full w-5 h-5"
                      src="https://dkstatics-public.digikala.com/digikala-content-x-profile/1e51bea61daeecad7c84e45972294850d1b5ede8_1739907946.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80"
                      alt=""
                    />
                  </div>
                  <div className="shrink-0 ml-2">
                    <img
                      className="inline-block object-contain rounded-full w-5 h-5"
                      src="https://dkstatics-public.digikala.com/digikala-content-x-profile/54a724e6bddd9e90040c09e3154714be297eafc2_1723127746.jpg?x-oss-process=image/resize,m_lfit,h_150,w_150/quality,q_80"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mr-2">
                  <span className="text-[11px] text-[#424242] leading-[2.17] font-Medium">
                    یکتا محمودی, امیرمحمد ج و ۴ نفر دیگر پسندیده‌اند.
                  </span>
                </div>
              </div>
              {/* Video Title */}
              <div className="px-5">
                <p className="text-[12px] text-[#3f4064] leading-[2.15] font-Medium">
                  بهترین مکالمه !!
                </p>
              </div>
              {/* Product */}
              <div className="flex overflow-x-auto overflow-y-hidden scrollbar-none px-5 pt-3">
                <a className="w-full" href="#">
                  <div className="flex items-center p-2 border border-[#f0f0f1] rounded-lg text-[#3f4064] w-full ml-2">
                    <div className="overflow-hidden ml-3 rounded-lg">
                      <img
                        className="w-[42px] h-[42px] inline-block object-contain"
                        src="https://dkstatics-public.digikala.com/digikala-products/f68a6229f5e995295519ced72823e42715ea0c8b_1745760220.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
                        alt="handsfree"
                      />
                    </div>
                    <div className="w-full">
                      <div className="text-[10px] text-[2.17]">
                        هدفون بی سیم انکر مدل SoundCore Liberty Air 2
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex justify-start items-center gap-1">
                            <span className="text-[11px] font-Bold">
                              ۲,۵۸۹,۰۰۰ تومان
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <MdKeyboardArrowLeft className="text-[#424750] w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <p className="text-[12px] leading-[2.15] text-[#62666d] px-4 py-1 mx-5 mt-3 font-Regular">
                ۱ روز پیش
              </p>
            </section>
            {/* Divider */}
            <div className="py-1 bg-[#f5f5f5]"></div>
            {/* Application Download */}
            <div className="felx felx-col justify-center items-center bg-[url('https://www.digikala.com/statics/img/png/magnet/limit.png')] bg-cover bg-no-repeat h-[254px]">
              <div className="flex justify-center">
                <img
                  className="inline-block object-contain w-[56px] h-[56px] mt-6"
                  src="https://www.digikala.com/statics/img/png/magnet/magnet-arrow.webp"
                  alt="icon"
                />
              </div>
              <p className="text-[14px] text-[#212121] leading-[2.1] font-Bold text-center pt-2">
                دسترسی به هزاران ویدیو نقد و بررسی
              </p>
              <p className="text-[12px] text-[#424242] leading-[2.15] font-Medium text-center">
                برای استفاده از امکانات مگنت،‌ اپلیکیشن دیجی‌کالا را
                <br />
                دریافت کنید.
              </p>
              <div className="w-full z-2 flex justify-center items-center pt-4.5">
                <button className="relative flex items-center bg-[#ef4056] text-white w-[308px] text-[14px] leading-[2.15] py-3 px-8 rounded-lg">
                  <div className="flex items-center justify-center relative grow font-Bold">
                    <div className="flex ml-2">
                      <TbDeviceMobile className="w-[24px] h-[24px]" />
                    </div>
                    دریافت اپلیکیشن
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagnetModal;
