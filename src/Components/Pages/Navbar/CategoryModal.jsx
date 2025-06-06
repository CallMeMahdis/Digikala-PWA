import { useDispatch, useSelector } from "react-redux";
import SearchBoxMobile from "../SearchBox/SearchBoxMobile";
import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../Redux/Categories/ActionCategories";
import { FaQuestion } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { LiaLaptopSolid } from "react-icons/lia";
import { LuArmchair, LuBaby, LuHospital, LuMilk, LuTent } from "react-icons/lu";
import { RiFridgeLine, RiGalleryView2, RiRectangleLine } from "react-icons/ri";
import { TiHeartOutline } from "react-icons/ti";
import { IoCarSportOutline, IoChevronUp } from "react-icons/io5";
import { TbShirt, TbTool } from "react-icons/tb";
import { GiHeartNecklace } from "react-icons/gi";
import { TfiRulerPencil } from "react-icons/tfi";
import {
  MdCardGiftcard,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { fetchSubCatMobile } from "../../Redux/SubCatMobile/ActionSubCatMobile";

// Icons
const iconMap = {
  موبایل: <AiOutlineMobile className="w-[16px] h-[16px] text-[#424750]" />,
  "کالای دیجیتال": (
    <LiaLaptopSolid className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "خانه و آشپزخانه": (
    <LuArmchair className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "لوازم خانگی برقی": (
    <RiFridgeLine className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "آرایشی بهداشتی": (
    <TiHeartOutline className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "خودرو و موتورسیکلت": (
    <IoCarSportOutline className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "ابزار آلات و تجهیزات": (
    <TbTool className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "مد و پوشاک": <TbShirt className="w-[16px] h-[16px] text-[#424750]" />,
  "طلا و نقره": (
    <GiHeartNecklace className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "تجهیزات پزشکی و سلامت": (
    <LuHospital className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "کتاب، لوازم تحریر و هنر": (
    <TfiRulerPencil className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "ورزش و سفر": <LuTent className="w-[16px] h-[16px] text-[#424750]" />,
  "کارت هدیه و گیفت کارت": (
    <MdCardGiftcard className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "سوپر مارکت آنلاین": <LuMilk className="w-[16px] h-[16px] text-[#424750]" />,
  "اسباب بازی، کودک و نوزاد": (
    <LuBaby className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "محصولات بومی و محلی": (
    <PiPlantFill className="w-[16px] h-[16px] text-[#424750]" />
  ),
  "کالای کارکرده": (
    <RiRectangleLine className="w-[16px] h-[16px] text-[#424750]" />
  ),
};

const CategoryModal = () => {
  // Categories
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  // SubCategories
  const { subCatMobile } = useSelector((state) => state.subCatMobile);
  // Dropdown
  const [openDropdownId, setOpenDropdownId] = useState(null);
  // Active Category
  const [activeCategoryId, setActiveCategoryId] = useState(
    categories && categories.length > 0 ? categories[0].id : null
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCatMobile());
  }, [dispatch]);

  return (
    <div>
      <div className="px-4 py-3">
        {/* Top Search Box */}
        <SearchBoxMobile />
      </div>

      {/* Sidebar */}
      <div className="grow bg-white felx flex-col">
        <div className="h-full flex overflow-hidden overscroll-none grow-0">
          {/* Right Side */}
          <div className="bg-[#f0f0f1] w-[90px] shrink-0 overflow-y-auto scrollbar-none">
            {categories?.map((category) => {
              return (
                <div
                  key={category.id}
                  className={
                    "flex flex-col items-center py-3 px-2 border-l border-l-white overscroll-none border-b border-b-[#e0e0e2] cursor-pointer " +
                    (activeCategoryId === category.id ? "bg-white" : "")
                  }
                  onClick={() => setActiveCategoryId(category.id)}
                >
                  <div className="flex mb-1">
                    {iconMap[category.title] ? (
                      React.cloneElement(iconMap[category.title], {
                        className:
                          "w-[16px] h-[16px] " +
                          (activeCategoryId === category.id
                            ? "text-[#ef4056]"
                            : "text-[#424750]"),
                      })
                    ) : (
                      <FaQuestion />
                    )}
                  </div>
                  <span
                    className={
                      "text-[10px] leading-[2.17] text-center font-Regular " +
                      (activeCategoryId === category.id
                        ? "text-[#ef4056]"
                        : "text-[#3f4064]")
                    }
                  >
                    {category.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Left Side */}
          <div className="grow mr-2 overflow-y-auto scrollbar-none">
            {subCatMobile
              ?.filter((subCat) => subCat.id === activeCategoryId)
              .map((subCat) => {
                return (
                  <div
                    key={subCat.id}
                    className="flex flex-col items-stretch grow px-2"
                  >
                    {/* Blue Title */}
                    <a className="overscroll-none style-inherint" href="#">
                      <div className="break-words py-3">
                        <div className="flex items-center justify-center grow">
                          <p className="grow text-[11px] leading-[2.17] text-[#008eb2]">
                            <span className="relative font-Bold">
                              همه محصولات {subCat.title}
                            </span>
                          </p>
                          <div className="flex shrink-0 mr-2">
                            <MdKeyboardArrowLeft className="text-[18px] text-[#008eb2]" />
                          </div>
                        </div>
                      </div>
                    </a>

                    {subCat.children.map((item) => {
                      const isOpen = openDropdownId === item.id;
                      return (
                        <div
                          key={item.id}
                          className="border-b border-b-[#f0f0f1]"
                        >
                          <div
                            className="text-[12px] leading-[2.15] py-3 text-[#0c0c0c] break-words"
                            onClick={() =>
                              setOpenDropdownId(isOpen ? null : item.id)
                            }
                          >
                            <div className="flex items-center grow">
                              <p className="grow cursor-pointer">
                                <span className="relative font-Bold">
                                  {item.title}
                                </span>
                              </p>
                              <div className="flex mr-2 shrink-0">
                                {item.children && item.children.length > 0 ? (
                                  isOpen ? (
                                    <MdKeyboardArrowUp className="text-[24px] text-[#424750]" />
                                  ) : (
                                    <MdKeyboardArrowDown className="text-[24px] text-[#424750]" />
                                  )
                                ) : null}
                              </div>
                            </div>
                          </div>
                          {/* dropDown */}
                          {isOpen && item.children && (
                            <div className="text-[10px] leading-[2.17] text-[#3f4064] mt-0.5">
                              <div className="grid grid-cols-3">
                                {item.children.map((child) => (
                                  <a
                                    key={child.id}
                                    className="flex flex-col items-center p-2 text-[10px] leading-[2.17] text-[#0c0c0c] text-center"
                                    href="#"
                                  >
                                    <div className="relative flex items-center justify-center bg-[#f0f0f1] mb-2 rounded-full w-[64px] h-[64px]">
                                      <div className="w-[45px] h-[45px] leading-0">
                                        <img
                                          className="w-[45px] h-[45px] inline-block mix-blend-darken object-contain"
                                          src={child.image}
                                          alt={child.title}
                                        />
                                      </div>
                                    </div>
                                    {child.title}
                                  </a>
                                ))}
                                {/* All Products */}
                                <a
                                  className="flex flex-col items-center p-2 text-[10px] leading-[2.17] text-[#0c0c0c]"
                                  href="#"
                                >
                                  <div className="w-[64px] h-[64px] bg-[#f0f0f1] flex items-center justify-center rounded-full mb-2">
                                    <div className="flex">
                                      <RiGalleryView2 className="text-[24px] text-[#424750]" />
                                    </div>
                                  </div>
                                  همه کالاها
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
