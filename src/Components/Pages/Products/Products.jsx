import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Products = ({ apiurl, dataKey }) => {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      let res = await axios.get(apiurl);
      setProducts(res.data[dataKey]);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div>
        <div className="grid bg-[#f0f0f1] grid-cols-1 lg:rounded-2xl lg:border lg:border-[#e0e0e2] overflow-hidden lg:grid-cols-4 gap-[1px]">
          {products?.map((product) => {
            return (
              <div
                key={product.id}
                className="flex flex-col w-full h-full px-5 py-2 bg-white"
              >
                <div className="flex items-center">
                  <div className="flex flex-col mb-2 w-full">
                    <h4 className="text-[16px] text-[#23254e] font-Bold">
                      {product.title}
                    </h4>
                    <p className="text-[11px] text-[#81858b] mt-2">
                      بر اساس سلیقه شما
                    </p>
                  </div>
                </div>
                <div
                  className="grid bg-[#f0f0f1]
                max-h-[651px] grid-cols-2 grow shrink basis-0 gap-[1px]"
                >
                  {product.images.map((image, index) => {
                    return (
                      <a
                        key={index}
                        className="w-full flex items-center justify-center relative p-2 bg-white"
                        href="#"
                      >
                        <span className="flex items-center rounded lg:rounded-none h-full">
                          <div className="h-full leading-0">
                            <img
                              className="w-full h-full lg:w-[130px] lg:h-[130px] object-contain inline-block"
                              src={image}
                              alt={product.title}
                            />
                          </div>
                        </span>
                      </a>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center mt-1 mb-3">
                  <a
                    className="inline-flex items-center cursor-pointer text-[12px] text-[#19bfd3]"
                    href="#"
                  >
                    <span>مشاهده</span>
                    <MdOutlineKeyboardArrowLeft className="w-[18px] h-[18px] text-[#19bfd3]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
