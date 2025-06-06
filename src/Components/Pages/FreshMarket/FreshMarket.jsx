import { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchFreshMarket } from "../../Redux/FreshMarket/ActionFreshMarket";

const FreshMarket = () => {
  const { marketProducts } = useSelector((state) => state.marketProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFreshMarket());
  }, [dispatch]);
  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0 px-5">
      <div>
        <div
          className="relative overflow-hidden bg-[#f0f0f1] min-h-[110px] w-full flex flex-col lg:flex-row justify-between rounded-2xl lg:items-center px-5 lg:px-10 pt-4 pb-3"
          href="#"
        >
          {/* Background */}
          <div className="absolute left-0 right-0 bottom-0 top-0 z-index-1 bg-[url('https://www.digikala.com/statics/img/svg/typography/freshPattern.svg')] bg-no-repeat bg-left"></div>
          {/* Right Side */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center z-index-1 shrink-0 gap-2 lg:gap-0">
            <div className="flex items-center z-index-1 shrink-0">
              <div className="w-[66px] h-[62px] leading-0">
                <img
                  className="inline-block object-contain w-[66px] h-[62px]"
                  src="https://www.digikala.com/statics/img/png/amazing/fresh.webp"
                  alt="fresh"
                />
              </div>

              <div className="mx-2 lg:mx-5 w-[250px] h-[28px] leading-0">
                <img
                  className="inline-block object-contain w-[250px] h-[28px]"
                  src="https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="items-center text-center mx-2 lg:mx-0 inline-flex justify-center px-3 bg-[#029a49] rounded-full h-[28px] text-[12px] font-Medium">
              <p className="inline-block text-white">تا ۵۰٪ تخفیف</p>
            </div>
          </div>
          {/* Left Side */}
          <div className="flex items-center justify-between lg:justify-start mt-4 lg:mt-0 lg:mr-4 z-index-1">
            {/* Products */}
            <div className="flex items-center lg:justify-end flex-nowrap lg:flex-wrap overflow-hidden max-h-[74px]">
              {marketProducts?.map((product) => {
                return (
                  <a key={product.id}
                    className="relative bg-white rounded-[50%] flex items-center justify-center p-2 ml-2 lg:mb-4"
                    href="#"
                  >
                    <div className="overflow-hidden rounded-[50%]">
                      <div className="w-[58px] h-[58px] leading-0">
                        <img
                          className="w-[58px] h-[58px] inline-block object-contain"
                          src={product.url}
                          alt={product.title_fa}
                        />
                      </div>
                    </div>
                    {product.discount && (
                      <div className="px-1 text-white rounded-lg bg-[#d32f2f] flex items-center justify-center absolute right-0 bottom-0 z-index-1 w-[34px] h-[20px]">
                        <span>{product.discount}</span>
                      </div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* More */}
            <div className="bg-white p-3 lg:py-3 lg:px-5 flex items-center justify-center rounded-full text-[#029a49]">
              <span className="hidden lg:inline whitespace-nowrap cursor-pointer font-Regular text-[12px]">
                بیش از ۱۰۰ کالا
              </span>
              <div className="flex mr-0 lg:mr-2">
                <FaArrowLeftLong className="w-[18px] h-[18px] text-[#029a49]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshMarket;
