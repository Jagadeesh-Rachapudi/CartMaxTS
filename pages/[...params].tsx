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
      <Nav1 {...(Nav1data as Nav1Props)} />
      <h1 className="me-auto ms-auto">No Found</h1>
      <BlackWhite {...(BlackWhiteData as BlackWhiteProps)} />
      <Footer1 {...(Footer1Data as Footer1Props)} />
    </div>
  );
}
