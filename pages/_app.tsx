import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../redux/store/reducer";

import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

import "../Utils/Furniture/FurnitureItem.scss";
import "../Utils/NewsArticle/NewsArticle.scss";
import "../Utils/ShoesOnDisplay/ShoesOnDisplay.scss";
import "../Utils/ShoesItem/ShoesItem.scss";
import "../Utils/RedButton/RedButton.scss";
import "../Utils/HomeFashionItem/HomeFashionItem.scss";
import "../Utils/NewsArticle2/NewsArticle2.scss";
import "../Utils/GradiantButton/GradiantButton.scss";
import "../Utils/BlueButton/BlueButton.scss";
import "../Utils/ColorCard/ColorCard.scss";
import "../Utils/MarketItem/MarketItem.scss";
import "../Utils/SpecialOffer/SpecialOffer.scss";
import "../Utils/Deals/Deals.scss";
import "../Utils/BrownButton/BrownButton.scss";
import "../Utils/WatchItem/WatchItem.scss";

import "../Components/Nav1/Nav1.scss";
import "../Components/Hedder1/Hedder1.scss";
import "../Components/Card1/Card1.scss";
import "../Components/Living/Living.scss";
import "../Components/VerticalCards/VerticalCards.scss";
import "../Components/YourItems/YourItems.scss";
import "../Components/Timmer1/Timmer1.scss";
import "../Components/YearBest/YearBest.scss";
import "../Components/Stars/Stars.scss";
import "../Components/News/News.scss";
import "../Components/BlackWhite/BlackWhite.scss";
import "../Components/Footer1/Footer1.scss";

import "../Components/Nav2/Nav2.scss";
import "../Components/SlideShow1/SlideShow1.scss";
import "../Components/Categories/Categories.scss";
import "../Components/ItemsListing/ItemsListing.scss";
import "../Components/Snekers/Snekers.scss";
import "../Components/Savings/Savings.scss";
import "../Components/Percent/Percent.scss";
import "../Components/Yourself/Yourself.scss";
import "../Components/SelectShoes/SelectShoes.scss";
import "../Components/BlackWhite2/BlackWhite2.scss";
import "../Components/Footer2/Footer2.scss";

import "../Components/Nav3/Nav3.scss";
import "../Components/SlideShow2/SlideShow2.scss";
import "../Components/Behind/Behind.scss";
import "../Components/BestSales/BestSales.scss";
import "../Components/Mini/Mini.scss";
import "../Components/Month/Month.scss";
import "../Components/Amazon/Amazon.scss";
import "../Components/Cards/Cards.scss";
import "../Components/Timmer2/Timmer2.scss";
import "../Components/News2/News2.scss";
import "../Components/Insta/Insta.scss";
import "../Components/Footer3/Footer3.scss";

import "../Components/Nav4/Nav4.scss";
import "../Components/BlackWhite3/BlackWhite3.scss";
import "../Components/TopSearch/TopSearch.scss";
import "../Components/Nav5/Nav5.scss";
import "../Components/Hedder2/Hedder2.scss";
import "../Components/Featured/Featured.scss";
import "../Components/Popular/Popular.scss";
import "../Components/Categories2/Categories2.scss";
import "../Components/Offers/Offers.scss";
import "../Components/Smart/Smart.scss";
import "../Components/Timmer3/Timmer3.scss";
import "../Components/BestSellers/BestSellers.scss";
import "../Components/Footer4/Footer4.scss";

import "../Components/Nav6/Nav6.scss";
import "../Components/Hedder3/Hedder3.scss";
import "../Components/Arrivals/Arrivals.scss";
import "../Components/Collection/Collection.scss";
import "../Components/TwoParts/TwoParts.scss";

import type { AppProps } from "next/app";

const store: Store<productState, productAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
