import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiShoppingBasketFill } from "react-icons/ri";
import { FaRegClock, FaShippingFast } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

const MarketModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed Green Button Bottom Left */}
      <button
        className="fixed bottom-6 left-6 z-40 bg-[#029a49] hover:bg-[#009e3c] text-white font-Medium rounded-full px-6 py-3 flex items-center gap-2 shadow-lg transition"
        onClick={() => setOpen(true)}
        style={{ direction: "rtl" }}
      >
        <span className="text-[13px] lg:text-[15px] leading-[2.15] pl-2">
          سوپرمارکت
        </span>
        <span className="text-[#86ab97] hide-on-short">|</span>
        <span className="text-[13px] lg:text-[15px] leading-[2.15] hide-on-short">
          تنوع بالا و پر تخفیف
        </span>
        <RiShoppingBasketFill className="w-[28px] h-[28px]" />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg shadow-xl w-[460px] h-[370px] max-w-[420px] p-6 relative">
            {/* Close button */}
            <button
              className="absolute top-8 left-4 text-2xl text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
              aria-label="بستن"
            >
              <IoMdClose className="w-[20px] h-[20px] text-[#424750]" />
            </button>
            {/* Title */}
            <div>
              <h2 className="font-Bold text-[14px] lg:text-[16px] text-[#3f4064] mb-1">
                یکی از سوپرمارکت‌های زیر را انتخاب کنید
              </h2>
              <div className="text-[11px] lg:text-[12px] text-[#a1a3a8] mt-2">
                فقط در شهرهای تهران و کرج
              </div>
            </div>
            {/* Options */}
            <div className="flex gap-3 mt-6 flex-col sm:flex-row">
              {/* Option 1 */}
              <div className="flex-1 h-[250px] bg-[#dbf3e6] rounded-xl p-4 flex flex-col shadow gap-5">
                
                <div className="font-Bold text-[#0c0c0c] mb-1 flex items-center gap-1 text-[14px] lg:text-[16px]">
                  پر تخفیف و متنوع
                  <MdKeyboardArrowLeft className="text-[#0c0c0c]" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="bg-[#029a49] text-white text-xs rounded-[24px] rounded-tr-[4px] px-3 py-1 flex items-center gap-1">
                    <FaShippingFast className="text-white w-[14px] h-[14px] scale-x-[-1]" />
                    ارسال امروز
                  </span>
                </div>
                <img
                  src="https://www.digikala.com/statics/img/png/fresh-shop-basket.webp"
                  alt="پر تخفیف و متنوع"
                  className="w-[130px] h-[130px] object-contain mb-2 mr-[33px]"
                />
              </div>
              {/* Option 2 */}
              <div className="flex-1 h-[250px] bg-[#feebde] rounded-xl p-4 flex flex-col shadow border border-[#ffe0e0] gap-5">
                
                <div className="font-Medium text-[#0c0c0c] mb-1 flex items-center gap-1 text-[14px] lg:text-[16px]">
                  ارسال سریع
                  <MdKeyboardArrowLeft className="text-[#0c0c0c]" />
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <span className="bg-[#ff8042] text-white text-xs rounded-[24px] rounded-tr-[4px] px-3 py-1 flex items-center gap-1">
                    <FaRegClock className="w-[14px] h-[14px] text-white" />
                    ۴۵ دقیقه‌ای
                  </span>
                </div>
                <img
                  src="https://www.digikala.com/statics/img/png/jet-shop-basket.webp"
                  alt="ارسال سریع"
                  className="w-[130px] h-[130px] object-contain mb-2 mr-[33px]"
                />
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MarketModal;
