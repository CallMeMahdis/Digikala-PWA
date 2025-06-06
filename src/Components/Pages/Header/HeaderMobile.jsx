import { BiBell } from "react-icons/bi";
import SearchBoxMobile from "../SearchBox/SearchBoxMobile";
import TopAd from "../TopAd/TopAd";
import SelectCity from "../SelectCity/SelectCity";

const HeaderMobile = () => {
  return (
    <>
      {/* Advertisement */}
      <TopAd />
      <div className="top-0 left-0 w-full z-index-3 bg-white">
        <header className="flex items-start relative px-4 py-3 lg:py-2 header-mobile z-index-5 border-b border-neutral-100 shadow-1-bottom">
          <div className="w-full relative ml-0">
            {/* Search Box */}
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex grow shrink basis-0">
                  <SearchBoxMobile />
                </div>

                {/* Bell Icon */}
                <a
                  className="flex justify-center items-center shrink-0 cursor-pointer relative bg-[#f0f0f1] rounded-full mr-2 p-2 overflow-hidden bell"
                  href="#"
                >
                  <BiBell className="w-[24px] h-[24px] text-[#424750]" />
                </a>
              </div>
            </div>

            {/* Select City */}
            <div>
              <SelectCity />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HeaderMobile;
