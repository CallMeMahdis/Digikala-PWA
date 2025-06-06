import axios from "axios";
import { useEffect, useState } from "react";

const SimpleBanner = ({apiUrl , dataKey}) => {
  const [banners, setBanners] = useState(null);

  //   Fetch Data From API
  const fetchBanners = async () => {
    try {
      let res = await axios.get(apiUrl);
      setBanners(res.data[dataKey]);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0 px-5 mt-5 mb-5">
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {banners?.map((banner) => {
          return (
            <a key={banner.id} className="block relative mr-0 mt-0" href="#">
              <div>
                <div className="h-full rounded-2xl leading-0 aspect-[100/75]">
                  <img
                    className="w-full h-full inline-block object-cover rounded-2xl"
                    src={banner.image}
                    alt={banner.title}
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SimpleBanner;
