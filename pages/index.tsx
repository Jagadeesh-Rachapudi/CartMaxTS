import Nav1, { IProps as Nav1Props } from "../Components/Nav1/Nav1";
import Nav1data from "../Components/Nav1/Nav1data.json";

import BlackWhite, {
  IProps as BlackWhiteProps,
} from "../Components/BlackWhite/BlackWhite";
import BlackWhiteData from "../Components/BlackWhite/BlackWhite.json";

import Footer1, { IProps as Footer1Props } from "../Components/Footer1/Footer1";
import Footer1Data from "../Components/Footer1/Footer1.json";

export default function Home() {
  return (
    <div>
      <div className="box-body">
        <form name="search">
          <input type="text" className="input" name="txt" />
        </form>
        <i className="fas fa-search"></i>
      </div>
      <a>
        <i className="fab fa-youtube"> </i>
      </a>
    </div>
  );
}
