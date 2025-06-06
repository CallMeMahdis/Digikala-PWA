import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import Accordion from "./Accordion";
import Brands from "./Brands";
import About from "./About";
const FooterMobile = () => {
  // Handle Accordion
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col justify-center py-4 px-5 mb-24">
      {/* Back To Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center relative text-[#19bfd3] text-[12px] leading-[2.17] py-1 px-1.5"
      >
        <div className="flex justify-center items-center relative grow">
          بازگشت به بالا
          <div className="flex mr-2">
            <IoIosArrowUp className="text-[#19bfd3] w-[24px] h-[24px]" />
          </div>
        </div>
      </button>
      <div>
        {/* Contact Support */}
        <div className="w-full flex justify-between items-center border-b border-b-[#f0f0f1] py-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-[#f2f2f2]">
              <div className="flex">
                <BiSupport className="w-[20px] h-[20px] text-[#424750]" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="block text-[12px] leading-[180%] text-[#424750] font-Medium">
                تماس با پشتیبانی
              </p>
              <span className="text-[12px] leading-[180%] text-[#81858b]">
                ۷ روز هفته، ۲۴ ساعت
              </span>
            </div>
          </div>
          <a
            className="flex items-center relative text-[#424750] text-[11px] leading-[180%] bg-[#f2f2f2] font-Medium rounded-full h-8 py-1.5 px-4"
            href="tel:02161930000"
          >
            <div className="flex justify-center items-center relative grow">
              تماس
            </div>
          </a>
        </div>
        {/* Download Application */}
        <div className="w-full flex justify-between items-center border-b border-b-[#f0f0f1] py-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-9 h-9 flex justify-center items-center rounded-full bg-[#f2f2f2]">
              <img
                className="inline-block w-[36px] h-[36px] object-contain rounded-full"
                src="https://www.digikala.com/statics/img/png/Logo.webp"
                alt="دیجی کالا"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="block text-[12px] leading-[180%] text-[#424750] font-Medium">
                اپلیکیشن دیجی‌کالا
              </p>
              <span className="text-[12px] leading-[180%] text-[#81858b]">
                تجربه خرید بهتر در
              </span>
            </div>
          </div>
          <a
            className="flex items-center relative text-[#424750] text-[11px] leading-[180%] bg-[#f2f2f2] font-Medium rounded-full h-8 py-1.5 px-4"
            href="#"
          >
            <div className="flex justify-center items-center relative grow">
              دانلود
            </div>
          </a>
        </div>
      </div>
      {/* Accordion Likns */}
      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        <Accordion
          title="با دیجی‌کالا"
          isOpen={openIndex === 0}
          onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
        >
          {/* ...accordion content... */}
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            اتاق خبر دیجی‌کالا
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            فروش در دیجی‌کالا{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            فرصت‌های شغلی{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            گزارش تخلف در دیجی‌کالا{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            تماس با دیجی‌کالا{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            درباره دیجی‌کالا{" "}
          </a>
        </Accordion>
        <Accordion
          title="خدمات مشتریان"
          isOpen={openIndex === 1}
          onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
        >
          {/* ...accordion content... */}
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            پاسخ به پرسش‌های متداول{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            رویه‌های بازگرداندن کالا{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            شرایط استفاده{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            حریم خصوصی{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            گزارش باگ{" "}
          </a>
        </Accordion>
        <Accordion
          title="راهنمای خرید از دیجی‌کالا"
          isOpen={openIndex === 2}
          onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
        >
          {/* ...accordion content... */}
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            نحوه ثبت سفارش{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            رویه ارسال سفارش{" "}
          </a>
          <a
            href="#"
            className="block text-[12px] text-[#424750] leading-[2.15] mb-3"
          >
            شیوه‌های پرداخت{" "}
          </a>
        </Accordion>
        <Accordion
          title="شرکای تجاری"
          isOpen={openIndex === 3}
          onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
        >
          {/* ...accordion content... */}
          <div className="flex flex-wrap">
            <Brands />
          </div>
        </Accordion>
      </div>
      {/* About */}
      <div className="grow mt-3">
        <About />
      </div>
    </div>
  );
};

export default FooterMobile;
