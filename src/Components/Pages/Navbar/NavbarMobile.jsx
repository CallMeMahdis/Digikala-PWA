import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { GiMoebiusTriangle } from "react-icons/gi";
import { LuShapes } from "react-icons/lu";
import {
  RiHome2Fill,
  RiHome2Line,
  RiShoppingCartFill,
  RiShoppingCartLine,
} from "react-icons/ri";
import CategoryModal from "./CategoryModal";
import CartModal from "./CartModal";
import MagnetModal from "./MagnetModal";
import MyDigikalaModal from "./MyDigikalaModal";
import { MdCategory } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";

const MODALS = {
  HOME: "HOME",
  CATEGORY: "CATEGORY",
  CART: "CART",
  MAGNET: "MAGNET",
  USER: "USER",
};

const NavbarMobile = () => {
  const [openModal, setOpenModal] = useState(null);
  const closeModal = () => setOpenModal(null);

  return (
    <>
      {openModal === MODALS.CATEGORY && (
        <div className="fixed left-0 top-0 bottom-[68px] z-[999] w-full bg-white shadow overflow-y-auto">
          <CategoryModal onClose={closeModal} />
        </div>
      )}
      {openModal === MODALS.CART && (
        <div className="fixed left-0 top-0 bottom-[68px] z-[999] w-full bg-white shadow overflow-y-auto">
          <CartModal onClose={closeModal} />
        </div>
      )}
      {openModal === MODALS.MAGNET && (
        <div className="fixed left-0 top-0 bottom-[68px] z-[999] w-full bg-white shadow overflow-y-auto">
          <MagnetModal onClose={closeModal} />
        </div>
      )}
      {openModal === MODALS.USER && (
        <div className="fixed left-0 top-0 bottom-[68px] z-[999] w-full bg-white shadow overflow-y-auto">
          <MyDigikalaModal onClose={closeModal} />
        </div>
      )}

      <div className="fixed bottom-[-1px] left-0 z-50 w-full h-17 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex justify-around items-center h-full w-full font-medium mt-1">
          {/* Home */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={closeModal}
          >
            {openModal === null ? (
              <RiHome2Fill
                className="w-6 h-7 mb-1 text-[#424750] group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
              />
            ) : (
              <RiHome2Line
                className="w-6 h-7 mb-1 text-[#a1a3a8] dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                aria-hidden="true"
              />
            )}
            <span
              className={
                "font-Bold text-[14px] " +
                (openModal === null
                  ? "text-[#0c0c0c]"
                  : "text-[#a1a3a8] dark:text-gray-400") +
                " group-hover:text-blue-600 dark:group-hover:text-blue-500"
              }
            >
              خانه
            </span>
          </button>
          {/* Category */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={() => setOpenModal(MODALS.CATEGORY)}
          >
            {openModal === MODALS.CATEGORY ? (
              <MdCategory
                className="w-6 h-7 mb-1 text-[#424750]"
                aria-hidden="true"
              />
            ) : (
              <LuShapes
                className="w-6 h-7 mb-1 text-[#a1a3a8]"
                aria-hidden="true"
              />
            )}
            <span
              className={
                "font-Medium text-[12px] whitespace-nowrap " +
                (openModal === MODALS.CATEGORY
                  ? "text-[#0c0c0c]"
                  : "text-[#a1a3a8] dark:text-gray-400") +
                " group-hover:text-blue-600 dark:group-hover:text-blue-500"
              }
            >
              دسته بندی
            </span>
          </button>
          {/* Cart */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={() => setOpenModal(MODALS.CART)}
          >
            {openModal === MODALS.CART ? (
              <RiShoppingCartFill
                className="w-6 h-7 mb-1 text-[#424750]"
                aria-hidden="true"
              />
            ) : (
              <RiShoppingCartLine
                className="w-6 h-7 mb-1 text-[#a1a3a8]"
                aria-hidden="true"
              />
            )}
            <span
              className={
                "font-Medium text-[12px] whitespace-nowrap " +
                (openModal === MODALS.CART
                  ? "text-[#0c0c0c]"
                  : "text-[#a1a3a8] dark:text-gray-400") +
                " group-hover:text-blue-600 dark:group-hover:text-blue-500"
              }
            >
              سبد خرید
            </span>
          </button>
          {/* Magnet */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={() => setOpenModal(MODALS.MAGNET)}
          >
            <GiMoebiusTriangle
              className={
                "w-6 h-7 mb-1 " +
                (openModal === MODALS.MAGNET
                  ? "text-[#424750]"
                  : "text-[#a1a3a8] dark:text-gray-400") +
                " group-hover:text-blue-600 dark:group-hover:text-blue-500"
              }
              aria-hidden="true"
            />
            <span
              className={
                "font-Medium text-[12px] whitespace-nowrap " +
                (openModal === MODALS.MAGNET
                  ? "text-[#0c0c0c]"
                  : "text-[#a1a3a8] dark:text-gray-400") +
                " group-hover:text-blue-600 dark:group-hover:text-blue-500"
              }
            >
              مگنت
            </span>
          </button>
          {/* User */}
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={() => setOpenModal(MODALS.USER)}
          >
            {openModal === MODALS.USER ? (
              <BiSolidUser
                className="w-6 h-7 mb-1 text-[#424750]"
                aria-hidden="true"
              />
            ) : (
              <FaRegUser
                className="w-5 h-6 mb-1 text-[#a1a3a8]"
                aria-hidden="true"
              />
            )}
            <span
              className={
                "font-Medium text-[12px] whitespace-nowrap " +
                (openModal === MODALS.USER
                  ? "text-[#0c0c0c]"
                  : "text-[#a1a3a8] dark:text-gray-400") +
                " group-hover:text-blue-600 dark:group-hover:text-blue-500"
              }
            >
              دیجی کالای من
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
