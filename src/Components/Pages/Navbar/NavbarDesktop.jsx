import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { AiOutlineGold, AiOutlineMobile } from "react-icons/ai";
import { GiHeartNecklace } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { IoCarSportOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";
import {
  LuArmchair,
  LuBaby,
  LuFlame,
  LuHospital,
  LuMilk,
  LuTent,
} from "react-icons/lu";
import { MdCardGiftcard, MdKeyboardArrowLeft } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import {
  RiFridgeLine,
  RiRectangleLine,
  RiShoppingBasketFill,
} from "react-icons/ri";
import { TbDeviceMobile, TbDiscount, TbShirt, TbTool } from "react-icons/tb";
import { TfiRulerPencil } from "react-icons/tfi";
import { TiHeartOutline } from "react-icons/ti";
import { fetchCategories } from "../../Redux/Categories/ActionCategories";
import { fetchSubCategories } from "../../Redux/SubCategories/ActionSubCategories";
import { FaQuestion } from "react-icons/fa";
import SelectCity from "../SelectCity/SelectCity";
import Masonry from "react-masonry-css";

// Icons
const iconMap = {
  موبایل: <AiOutlineMobile className="w-[23px] h-[23px] " />,
  "کالای دیجیتال": <LiaLaptopSolid className="w-[23px] h-[23px]" />,
  "خانه و آشپزخانه": <LuArmchair className="w-[23px] h-[23px]" />,
  "لوازم خانگی برقی": <RiFridgeLine className="w-[23px] h-[23px]" />,
  "آرایشی بهداشتی": <TiHeartOutline className="w-[23px] h-[23px]" />,
  "خودرو و موتورسیکلت": <IoCarSportOutline className="w-[23px] h-[23px]" />,
  "ابزار آلات و تجهیزات": <TbTool className="w-[23px] h-[23px]" />,
  "مد و پوشاک": <TbShirt className="w-[23px] h-[23px]" />,
  "طلا و نقره": <GiHeartNecklace className="w-[23px] h-[23px]" />,
  "تجهیزات پزشکی و سلامت": <LuHospital className="w-[23px] h-[23px]" />,
  "کتاب، لوازم تحریر و هنر": <TfiRulerPencil className="w-[23px] h-[23px]" />,
  "ورزش و سفر": <LuTent className="w-[23px] h-[23px]" />,
  "کارت هدیه و گیفت کارت": <MdCardGiftcard className="w-[23px] h-[23px]" />,
  "سوپر مارکت آنلاین": <LuMilk className="w-[23px] h-[23px]" />,
  "اسباب بازی، کودک و نوزاد": <LuBaby className="w-[23px] h-[23px]" />,
  "محصولات بومی و محلی": <PiPlantFill className="w-[23px] h-[23px]" />,
  "کالای کارکرده": <RiRectangleLine className="w-[23px] h-[23px]" />,
};

const NavbarDesktop = () => {
  // Categories
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  // Sub Categories
  const { subCategories } = useSelector((state) => state.subCategories);
  // Active Tab
  const [activeCategoryId, setActiveCategoryId] = useState("1");
  // Open Menu
  const [isOpen, setIsOpen] = useState(false);
  const megaMenuRef = useRef(null);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch, isOpen]);

 

  return (
    <nav className="flex flex-col flex-wrap items-center justify-between grow nav pt-2">
      <div className="w-full container-4xl-w relative flex justify-between grow mx-auto md:px-4 shadow-1-bottom bg-white">
        {/* Right Nav */}
        <div className="flex items-center cursor-pointer text-neutral-700 pb-1 pt-2 mt-1 lg:mt-0 lg:pt-0">
          {/* Categories */}
          <div className="flex">
            <div
              onMouseEnter={() => {
                setIsOpen(true);
                const mobileCategory = categories?.find(
                  (cat) => cat.title === "موبایل"
                );
                if (mobileCategory) setActiveCategoryId(mobileCategory.id);
              }}
              className="flex items-center h-full leading-0"
            >
              <span className="flex items-center cursor-pointer whitespace-nowrap text-neutral-700 font-Bold text-[14.5px]">
                <div className="flex text-neutral-600 ml-1.5">
                  <IoMdMenu className="w-[20px] h-5" />
                </div>
                دسته‌بندی کالاها
                <span className="relative top-2 bg-neutral-200 transform mr-5 mt-1"></span>
              </span>
            </div>

            {/* Mega Menu */}
            {isOpen && (
              <div
                ref={megaMenuRef}
                className="w-[85%] h-[70vh] absolute shadow-3-bottom z-50 mt-[29.9px]"
              >
                <div className="w-1/5 h-full bg-neutral-100 rounded-bl-md border-l border-neutral-100 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100 ltr overflow-y-auto">
                  {categories?.map((category) => {
                    return (
                      <div
                        key={category.id}
                        onMouseEnter={() => setActiveCategoryId(category.id)}
                      >
                        <a
                          href="#"
                          className="w-full flex items-center py-3 px-2 hover:bg-white hover:text-[#ef394e] rtl"
                        >
                          <span className="w-full h-full flex items-center">
                            <div className="flex ml-2">
                              {iconMap[category.title] || <FaQuestion />}
                            </div>
                            <p className="text-[0.87rem] font-Medium">
                              {category.title}
                            </p>
                          </span>
                        </a>

                        {activeCategoryId === category.id && (
                          <div className="w-[80%] h-full absolute left-0 top-0 bg-neutral-50 flex flex-wrap grow justify-between pt-5 px-5 ltr scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100 overflow-y-auto">
                            <div className="w-full h-full flex rtl">
                              <div className="h-full flex flex-col shrink basis-0 grow">
                                {subCategories
                                  ?.filter(
                                    (subCategory) =>
                                      subCategory.id === category.id
                                  )
                                  .map((subCategory) => (
                                    <div key={subCategory.id}>
                                      <a
                                        className="flex items-center mb-5 whitespace-nowrap min-w-[220px] text-[#008eb2] text-[0.8rem] font-Medium"
                                        href="#"
                                      >
                                        {subCategory.title}
                                        <div className="flex mr-1">
                                          <MdKeyboardArrowLeft />
                                        </div>
                                      </a>
                                      <ul className="rtl">
                                        <Masonry
                                          breakpointCols={4}
                                          className="flex w-full gap-[10px]"
                                          columnClassName="masonry-column"
                                        >
                                          {subCategory.categories?.map(
                                            (sub) => (
                                              <div
                                                key={sub.id}
                                                className="h-fit flex flex-col min-w-[25%] p-2"
                                              >
                                                <a
                                                  className="flex items-center relative mb-2 py-1 hover:text-[#ef4056]"
                                                  href="#"
                                                >
                                                  <span className="relative font-Bold border-r-2 border-r-[#ef4056] pr-2.5 text-[0.87rem] text-[#0c0c0c]">
                                                    <span>{sub.title}</span>
                                                  </span>
                                                  <div className="flex relative">
                                                    <MdKeyboardArrowLeft />
                                                  </div>
                                                </a>
                                                {sub.items?.map(
                                                  (item, index) => (
                                                    <a
                                                      key={index}
                                                      className="flex items-center relative py-1 text-neutral-500 hover:text-[#ef4056]"
                                                      href="#"
                                                    >
                                                      <span className="relative">
                                                        <span className="text-[0.85rem]">
                                                          {item}
                                                        </span>
                                                      </span>
                                                    </a>
                                                  )
                                                )}
                                              </div>
                                            )
                                          )}
                                        </Masonry>
                                      </ul>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Middle */}
          <div className="flex relative nav-border">
            <div className="h-full flex items-center leading-0 px-2.5 text-[14px]">
              <a
                className="flex items-center whitespace-nowrap cursor-pointer text-neutral-600 text-body-2 underline-hover"
                href="#"
              >
                <div className="flex text-neutral-400 ml-1 text-body-2">
                  <TbDiscount className="w-[20px] h-[20px]" />
                </div>
                شگفت‌انگیزها
              </a>
            </div>
            <div className="h-full flex items-center leading-0 px-2.5 text-[14px]">
              <a
                className="flex items-center whitespace-nowrap cursor-pointer text-neutral-600 text-body-2 underline-hover"
                href="#"
              >
                <div className="flex text-neutral-400 ml-1 text-body-2">
                  <RiShoppingBasketFill className="w-[20px] h-[20px]" />
                </div>
                سوپرمارکت
              </a>
            </div>
            <div className="h-full flex items-center leading-0 px-2.5 text-[14px]">
              <a
                className="flex items-center whitespace-nowrap cursor-pointer text-neutral-600 text-body-2 underline-hover"
                href="#"
              >
                <div className="flex text-neutral-400 ml-1 text-body-2">
                  <AiOutlineGold className="w-[20px] h-[20px]" />
                </div>
                طلای دیجیتال
              </a>
            </div>
            <div className="h-full flex items-center leading-0 px-2.5 text-[14px]">
              <a
                className="flex items-center whitespace-nowrap cursor-pointer text-neutral-600 text-body-2 underline-hover"
                href="#"
              >
                <div className="flex text-neutral-400 ml-1 text-body-2">
                  <LuFlame className="w-[20px] h-[20px]" />
                </div>
                پرفروش‌ترین‌ها
              </a>
            </div>
            <div className="h-full flex items-center leading-0 px-2.5 text-[14px]">
              <a
                className="flex items-center whitespace-nowrap cursor-pointer text-neutral-600 text-body-2 underline-hover"
                href="#"
              >
                <div className="flex text-neutral-400 ml-1 text-body-2">
                  <TbDeviceMobile className="w-[23px] h-[23px]" />
                </div>
                خرید کالای کارکرده
              </a>
            </div>
          </div>

          {/* End */}
          <div className="flex relative">
            <div className="h-full flex items-center leading-0 px-2.5 text-[14px]">
              <a
                className="flex items-center whitespace-nowrap cursor-pointer text-neutral-600 text-body-2 underline-hover"
                href="#"
              >
                سوالی دارید؟
              </a>
            </div>
            <div className="h-full flex items-center leading-0 px-2.5 text-[14px]">
              <a
                className="flex items-center whitespace-nowrap cursor-pointer text-neutral-600 text-body-2 underline-hover"
                href="#"
              >
                در دیجی‌کالا بفروشید!
              </a>
            </div>
          </div>
        </div>

        {/* Left Nav */}
        <SelectCity />
      </div>
    </nav>
  );
};

export default NavbarDesktop;
