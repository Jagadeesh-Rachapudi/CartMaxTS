import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

import "../Utils/Furniture/FurnitureItem.scss";
import "../Utils/NewsArticle/NewsArticle.scss";

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

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
