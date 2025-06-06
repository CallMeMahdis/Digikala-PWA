import { useState } from "react";
import { IoIosArrowDown, IoMdArrowBack, IoMdClose } from "react-icons/io";
import { FiHeadphones } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";

const faqs = [
  {
    question: "چگونه میتوانم یک پروفایل ایجاد کنم؟",
    answer:
      "در وب سایت روی گزینه ثبت نام کلیک کنید. میتوانید با استفاده از شماره موبایل ثبت نام خود را انجام دهید. (کد فعال سازی برایتان پیامک میشود .) بعد از وارد نمودن کد فعالسازی ، ثبت نام انجام می شود. سپس روی گزینه تکمیل اطلاعات کلیک و اطلاعات خود را تکمیل نمایید.",
  },
  {
    question: "چطور در دیجی کالا سفارش خود را ثبت کنم؟",
    answer:
      "بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه کنید ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب کنید.بعد از اتمام ثبت سفارش ، سیستم کد سفارش شما را نمایش خواهد داد.",
  },
  {
    question:
      "کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با تعداد بیش از یک عدد خریداری کرد؟",
    answer: "به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است، دیجی‌کالا تعهدی در قبال سفار‏‌های تعدادی ندارد و در صورتی که امکان فروش بیشتر از یک عدد وجود داشته باشد، هماهنگی‏‌های لازم با مشتری انجام خواهد شد..",
  },
];

const LiveChat = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      {!visible && (
        <button
          className="fixed bottom-6 right-6 z-40 bg-[#ef4056] hover:bg-[#e53950] text-white rounded-full w-13 h-13 flex items-center justify-center shadow-lg transition"
          onClick={() => setVisible(true)}
          aria-label="پشتیبانی آنلاین"
        >
          <FiHeadphones className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {visible && (
        <div className="fixed bottom-4 right-4 z-40 lg:w-[360px] lg:h-[70vh] bg-white rounded-2xl shadow-lg flex flex-col border border-[#ef4056] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#ef4056] text-white px-4 py-3">
            <span className="font-Medium text-[18px]">پشتیبانی آنلاین</span>
            <button className="text-2xl" onClick={() => setVisible(false)}>
              <IoMdArrowBack />
            </button>
          </div>
          {/* Body */}
          <div className="flex-1 overflow-y-auto px-3 py-2 bg-white">
            <div className="text-right text-black text-[12px] lg:text-[14px] mb-3 font-Medium leading-[2.15]">
              <h4 className="text-[16px] lg:text-[19px] font-Bold leading-[2.1]">
                سلام👋👋 
              </h4>
              اینجا می‌توانید تعدادی از پرسش های متداول را ببینید
              <br />
              یا در صورت تمایل با ما آنلاین گفتگو کنید!
            </div>
            {/* FAQ Accordion */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#e0e0e2] rounded-xl overflow-hidden"
                >
                  <button
                    className="flex items-center justify-between w-full p-3 text-right text-black font-medium text-[13px] lg:text-[15px] font-Medium focus:outline-none leading-[2.15]"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <span className="p-1">{faq.question}</span>
                    <span
                      className={`transition-transform duration-200 ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    >
                      <IoIosArrowDown className="text-black w-[17px] h-[17px]" />
                    </span>
                  </button>
                  {openIndex === idx && (
                    <div className="px-4 pb-3 text-[10pt] leading-[2.15] text-black">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Contact Button */}
            <div className="flex justify-center mt-6">
              <button className="h-[48px] flex items-center justify-center gap-2 bg-[#ef4056] text-white rounded-full py-3 px-4 text-[16px] font-bold shadow-md hover:bg-[#e53950] transition">
                تماس با ما
                <MdKeyboardArrowLeft className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
