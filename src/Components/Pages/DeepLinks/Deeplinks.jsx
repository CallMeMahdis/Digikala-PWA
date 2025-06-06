import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLinks } from "../../Redux/DeepLinks/ActionDeepLinks";
import { BsThreeDots } from "react-icons/bs";

const DeepLinks = () => {
  const { links } = useSelector((state) => state.links);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0 mt-3.5 mb-3">
      <div className="w-full lg:py-2 bg-white flex flex-nowrap lg:justify-around lg:items-start overflow-x-hidden overflow-y-hidden hide-s">
        {links?.map((link) => {
          return (
            <a
              key={link.id}
              className="w-[75px] flex flex-col items-center my-2 lg:my-0 lg:w-[82px] shrink-0"
              href="#"
            >
              <div className="w-[52px] h-[52px] leading-0">
                <img
                  className="w-full inline-block object-contain"
                  src={link.icon.url}
                  alt={link.title}
                />
              </div>
              <span className="text-neutral-700 text-[11px] mt-2 text-center px-3 lg:px-4 line-clamp-3 leading-[25px]">
                {link.title}
              </span>
            </a>
          );
        })}
        <div className="w-[80px] flex flex-col shrink-0 items-center my-2 lg:my-0 cursor-pointer lg:w-[82px] px-3 lg:px-4">
          <div className="w-[52px] h-[52px] bg-[#f0f0f1] rounded-full flex justify-center items-center text-[#a1a3a8]">
            <div className="flex">
              <BsThreeDots className="w-[24px] h-[24px]" />
            </div>
          </div>
          <span className="text-neutral-700 text-[11px] text-center mt-2">بیشتر</span>
        </div>
      </div>
    </div>
  );
};

export default DeepLinks;
