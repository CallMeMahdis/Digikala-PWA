import axios from "axios";
import { useEffect, useState } from "react";

const Advertisement = () => {
  const [ads, setAds] = useState(null);
  const fetchAds = async () => {
    try {
      let res = await axios.get("https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json");
      setAds(res.data.ads);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchAds();
  }, []);
  return (
    <div className="w-full max-w-[1336px] mx-auto lg:px-4 2xl:px-0 px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {ads?.map((ad) => {
          return (
            <a key={ad.id} href="#" className="w-full block relative mr-0 mt-0">
              <div>
                <div className="h-full rounded-2xl leading-0 aspect-[100/40]">
                  <img
                    className="w-full h-full inline-block object-cover rounded-2xl"
                    src={ad.image}
                    alt={ad.title}
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

export default Advertisement;
