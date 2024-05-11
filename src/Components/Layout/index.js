import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ColorPallete from "../../AboutStyle/colorPallete";

export default function Layout(props) {
   return (
      <Fragment>
         <Header />
         {props.children}
         <Footer />
      </Fragment>
   );
}
