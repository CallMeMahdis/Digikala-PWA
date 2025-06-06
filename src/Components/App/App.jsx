import { Provider } from "react-redux";
import store from "../Redux/store";
import HeaderDesktop from "../Pages/Header/HeaderDesktop";
import HeaderMobile from "../Pages/Header/HeaderMobile";
import NavbarMobile from "../Pages/Navbar/NavbarMobile";
import StoriesSlider from "../Pages/StoriesSlider/StoriesSlider";
import Slider from "../Pages/Slider/Slider";
import DeepLinks from "../Pages/DeepLinks/Deeplinks";
import Supermarket from "../Pages/Supermarket/Supermarket";
import SpecialOffers from "../Pages/SpecialOffers/SpecialOffers";
import SimpleBanner from "../Pages/SimpleBanner/SimpleBanner";
import FreshMarket from "../Pages/FreshMarket/FreshMarket";
import ShopCategory from "../Pages/ShopCategory/ShopCategory";
import Advertisement from "../Pages/Advertisement/Advertisement";
import PopularBrands from "../Pages/PopularBrands/PopularBrands";
import Products from "../Pages/Products/Products";
import BestSelling from "../Pages/BestSelling/BestSelling";
import Sales from "../Pages/Sales/Sales";
import Posts from "../Pages/Posts/Posts";
import FooterDesktop from "../Pages/Footer/FooterDesktop";
import FooterMobile from "../Pages/Footer/FooterMobile";
import LiveChat from "../Pages/LiveChat/LiveChat";
import MarketModal from "../Pages/MarketModal/MarketModal";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div className="fixed top-0 left-0 w-full z-50 bg-neutral-100">
          {/* Headre */}
          <div className="hidden lg:block">
            <HeaderDesktop />
          </div>
          <div className="block lg:hidden">
            <HeaderMobile />
            <NavbarMobile />
          </div>
        </div>
        {/* Spacer for sticky/fixed header */}
        <div className="lg:block h-[180px]" />
        {/* Page Content */}
        <div className="content">
          {/* Live Stories */}
          <StoriesSlider />
          {/* Main Slider */}
          <Slider />
          {/* Supermarket ad for Smaller Devices */}
          <div className="lg:hidden block">
            <Supermarket />
          </div>
          {/* Links */}
          <DeepLinks />
          {/* Special Offers */}
          <SpecialOffers />
          {/* Simple Banner 1 */}
          <SimpleBanner apiUrl={"https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"} 
          dataKey="simpleBanner"
          />
          {/* Special Offers for Supermarket */}
          <FreshMarket />
          {/* Simple Banner 2 */}
          <SimpleBanner apiUrl={"https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"}
          dataKey="simpleBanner2"
          />
          {/* Shopping Base On Categories */}
          <ShopCategory />
          {/* Advertisement */}
          <Advertisement />
          {/* Popular Brands */}
          <PopularBrands />
          {/* Suggested Products */}
          <Products
            apiurl={
              "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
            }
            dataKey="suggestedProducts"
          />
          {/* Best Selling Products */}
          <BestSelling
            apiUrl={
              "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
            }
            dataKey="bestSellingProducts"
          />
          {/* Suggested Products 2 */}
          <Products
            apiurl={
              "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
            }
            dataKey="suggestedProducts2"
          />
          {/* Selected Discounted and Sale Products */}
          <Sales />
          {/* Hot Products */}
          <BestSelling
            apiUrl={
              "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
            }
            dataKey="hotProducts"
          />
          {/* Magazin Posts */}
          <Posts />
        </div>
        {/* Footer */}
        <div className="hidden lg:block">
          <FooterDesktop />
        </div>
        <div className="block lg:hidden">
          <FooterMobile />
        </div>
        {/* Customer Support */}
        <div className="hidden lg:block">
          <LiveChat />
          {/* Supermarket Modal */}
          <MarketModal />
        </div>
      </Provider>
    </div>
  );
};

export default App;
