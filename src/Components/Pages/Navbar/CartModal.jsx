import { useState } from "react";
import { BiTimer } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";

const CartModal = () => {
  const [activeTab, setActiveTab] = useState("cart");

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Tabs */}
      <div className="flex border-b border-b-[#f0f0f1]">
        <button
          className={`flex-1 py-0 text-center text-[13px] font-Bold ${
            activeTab === "cart"
              ? "text-[#ef4056] border-b-4 border-b-[#ef4056]"
              : "text-[#81858b]"
          }`}
          onClick={() => setActiveTab("cart")}
        >
          سبد خرید
        </button>
        <button
          className={`flex-1 py-4 text-center text-[13px] font-Bold ${
            activeTab === "next"
              ? "text-[#ef4056] border-b-4 border-b-[#ef4056]"
              : "text-[#81858b]"
          }`}
          onClick={() => setActiveTab("next")}
        >
          خرید بعدی
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-5 px-2">
        {activeTab === "next" ? (
          <>
            <img
              src="https://www.digikala.com/statics/img/png/empty-sfl.webp"
              alt="لیست خرید بعدی خالی است"
              className="w-[200px] h-[150px] mx-auto mb-4"
              draggable={false}
            />
            <div className="text-center text-[16px] leading-[2.1] font-Bold">
              لیست خرید بعدی شما خالی است!
            </div>
            <div className="text-center text-[11px] text-[#62666d] mb-6 leading-[2.17] p-6 border-b border-b-[#e0e0e2]">
              شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد
              خرید آن‌ها را ندارید، در لیست خرید بعدی قرار داده و هر زمان مایل
              بودید، آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
            </div>
            <div className="w-full max-w-[600px] mx-auto px-3 ">
              <div className="break-words px-4 py-6 shadow-md bg-white rounded-xl border border-[#e0e0e2] mb-9">
                <div className="flex items-center grow">
                  <div className="flex shrink-0 ml-2">
                    <FiLogIn className="text-[#f9a825] text-[20px] ml-2 rotate-180" />
                  </div>
                  <p className="grow text-right text-[14px] font-Bold text-[#0c0c0c]">
                    <span className="relative"> ورود به حساب کاربری</span>
                  </p>
                  <div className="flex mr-2 shrink-0">
                    <MdKeyboardArrowLeft className="text-[22px] text-[#0c0c0c]" />
                  </div>
                </div>
                <div className="text-[11px] text-[#81858b] font-Normal mt-1 leading-[2.17] pr-7">
                  برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید
                  وارد شوید.
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full max-w-[600px] mx-auto px-3 ">
              <div className="break-words px-4 py-6 shadow-md bg-white rounded-xl border border-[#e0e0e2] mb-9">
                <div className="flex items-center grow">
                  <div className="flex shrink-0 ml-2">
                    <FiLogIn className="text-[#f9a825] text-[20px] ml-2 rotate-180" />
                  </div>
                  <p className="grow text-right text-[14px] font-Bold text-[#0c0c0c]">
                    <span className="relative"> ورود به حساب کاربری</span>
                  </p>
                  <div className="flex mr-2 shrink-0">
                    <MdKeyboardArrowLeft className="text-[22px] text-[#0c0c0c]" />
                  </div>
                </div>
                <div className="text-[11px] text-[#81858b] font-Normal mt-1 leading-[2.17] pr-7">
                  برای مشاهده محصولاتی که پیش‌تر به سبد خرید خود اضافه کرده‌اید
                  وارد شوید.
                </div>
              </div>
            </div>
            <img
              src="https://www.digikala.com/statics/img/svg/empty-cart.svg"
              alt="لیست خرید"
              className="w-[200px] h-[150px] mx-auto mb-4 mt-8"
              draggable={false}
            />
            <div className="text-center text-[16px] font-Bold mb-2 text-[#23254e]">
              سبد خرید شما خالی است!
            </div>
            <div className="text-center text-[11px] text-[#62666d] mb-6 leading-[2.17] w-full border-b border-b-[#e0e0e2] pb-12">
              می‌توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
            </div>
            {/* Recent visits box */}
            <div className="mx-0 w-full">
              <div className="flex flex-col items-start w-full relative overflow-hidden min-h-[360px] bg-white">
                <div className="break-words px-5 py-2">
                  <div className="flex items-center grow border-b-2 border-b-[#ef394e] pb-2">
                    <p className="grow text-[14px] leading-[2.1] text-[#0c0c0c] text-right">
                      <span className="relative font-Bold">بازدیدهای اخیر</span>
                    </p>
                  </div>
                </div>
                <div className="flex overflow-x-auto overflow-y-hidden scrollbar-none w-full justify-start">
                  <a
                    className="w-[160px] min-w-[160px] max-w-[160px] block cursor-pointer relative overflow-hidden grow py-3 px-4 h-full border border-[#f0f0f1]"
                    href="#"
                  >
                    <div className="h-full">
                      <article className="flex flex-col items-stretch justify-start h-full overflow-hidden">
                        <div className="flex flex-col grow relative">
                          <div>
                            <div className="flex items-stretch flex-col relative mb-1">
                              <div className="flex items-start mx-auto">
                                <img
                                  className="w-[128px] h-[128px] inline-block object-contain"
                                  src="https://dkstatics-public.digikala.com/digikala-products/dcde9287e1796be365c7b2f6eb76df90ff0fb683_1681737510.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                                  alt="products"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grow flex flex-col items-stretch justify-start">
                            <div>
                              <h3 className="h-[52px] text-[11px] text-[#3f4064] leading-[2.17] font-Bold line-clamp-2">
                                اس اس دی اینترنال ام اس آی مدل MSI SPATIUM M371
                                ظرفیت 500 گیگابایت
                              </h3>
                            </div>
                            <div className="mb-1 flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="flex shrink-0 ml-1">
                                  <BiTimer className="text-[18px] text-[#1028ff]" />
                                </div>
                                <p className="text-[10px] text-[#62666d] leading-[2.17]">
                                  ارسال سریع دیجی‌کالا (تهران و کرج)
                                </p>
                              </div>
                            </div>
                            <div className="pt-1 flex flex-col items-stretch justify-between">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center justify-end gap-1 text-[14px] text-[#3f4064] leading-[2.1] grow">
                                  <span className="font-Bold">
                                    ۳,۰۲۰,۰۰۰ تومان
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
