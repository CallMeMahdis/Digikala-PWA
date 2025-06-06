import { combineReducers } from "redux";
import ReducerCategories from "./Categories/ReducerCategories";
import ReducerSubCategories from "./SubCategories/ReducerSubCategories";
import ReducerSelectCity from "./SelectCity/ReducerSelectCity";
import ReducerStories from "./Stories/ReducerStories";
import ReducerSlider from "./Slider/ReducerSlider";
import ReducerDeepLinks from "./DeepLinks/ReducerDeepLinks";
import ReducerSpecialOffers from "./SpecialOffers/ReducerSpecialOffers";
import ReducerFreshMarket from "./FreshMarket/ReducerFreshMarket";
import ReducerShopCategory from "./ShopCategory/ReducerShopCategory";
import ReducerPopularBrands from "./PopularBrands/ReducerPopularBrands";
import ReducerSales from "./Sales/ReducerSales";
import ReducerPosts from "./Posts/ReducerPosts";
import ReducerSubCatMobile from "./SubCatMobile/ReducerSubCatMobile";

const rootreducer = combineReducers({
  categories: ReducerCategories,
  subCategories: ReducerSubCategories,
  cities: ReducerSelectCity,
  stories: ReducerStories,
  slides: ReducerSlider,
  links: ReducerDeepLinks,
  offers: ReducerSpecialOffers,
  marketProducts: ReducerFreshMarket,
  shopCategories: ReducerShopCategory,
  brands: ReducerPopularBrands,
  saleProducts: ReducerSales,
  posts: ReducerPosts,
  subCatMobile: ReducerSubCatMobile,
});
export default rootreducer;
