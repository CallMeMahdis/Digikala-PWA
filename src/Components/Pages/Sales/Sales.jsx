import { useEffect } from "react";
import { LuTicketPercent } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaleProducts } from "../../Redux/Sales/ActionSales";

const Sales = () => {
  const { saleProducts } = useSelector((state) => state.saleProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSaleProducts());
  }, [dispatch]);

  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0 mt-5">
      <div className="px-5 lg:px-3 bg-white lg:rounded-2xl lg:border lg:border-[#e0e0e2]">
        {/* Title */}
        <div className="flex items-center justify-center py-3 lg:py-4 mb-2">
          <div className="flex">
            <LuTicketPercent className="w-[24px] h-[24px] text-[#ef4056]" />
          </div>
          <h3 className="lg:text-[21px] text-[18px] mr-2 font-Bold">
            منتخب محصولات تخفیف و حراج
          </h3>
        </div>
        {/* Content */}
        <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
          {saleProducts?.map((product) => {
            return (
              <div
                key={product.id}
                className="cursor-pointer h-full relative bg-white overflow-hidden grow px-3 py-4 lg:px-2 lg:border-b lg:border-neutral-300"
              >
                <div className="h-full">
                  <article className="flex flex-col items-stretch justify-start h-full overflow-hidden">
                    <div className="flex grow flex-col relative">
                      <div>
                        <div className="flex items-stretch flex-col relative mb-1">
                          <div className="flex items-start mx-auto leading-0">
                            <img
                              className="w-[150px] h-[150px] object-contain inline-block"
                              src={product.url}
                              alt={product.title}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch justify-start grow">
                        <div className="pt-1 flex flex-col items-stretch justify-between">
                          <div className="flex items-center justify-between">
                            <div className="px-1 text-white rounded-2xl flex justify-center items-center bg-[#d32f2f]">
                              <span className="text-[12px] font-Bold">
                                {product.discount}٪
                              </span>
                            </div>
                            <div className="flex justify-end items-center gap-1 text-[#3f4064]">
                              <span className="text-[16px] font-Bold">
                                {product.finalprice}تومان
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pl-5">
                            <div className="text-[12px] text-[#c0c2c5] mr-auto line-through self-end">
                              {product.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sales;
