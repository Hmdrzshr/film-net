import { Link } from "react-router-dom";
import Style from "./style";
import { genreList } from "../../../Utils/genreList";
import { useState } from "react";

export default function Header() {
   const [headerIsHovered, setHeaderIsHovered] = useState(false);
   function changeHeadersBackground() {
      setHeaderIsHovered(true);
      // document.getElementById("header").classList.add("hover-background");
   }
   function defaultHeadersBackground() {
      setHeaderIsHovered(false);
      // const stopHover = document.getElementById("header");
      // stopHover.removeEventListener("onmouseover", changeHeadersBackground);
      // document.getElementById("header").style.background =
      //    "linear-gradient(to top, transparent, transparent, #000)";
   }
   function renderGenreItems() {
      return genreList.map(({ genreName }) => {
         return (
            <li key={genreName} className="mini-radius">
               <h3>{genreName}</h3>
            </li>
         );
      });
   }
   return (
      <Style>
         <div id="header" className={`header ${headerIsHovered ? "hover-background" : ""}`}>
            <div className="container">
               <div className="header-contents d-flex j-between align-center">
                  <div className="logo-menu d-flex j-between align-center gap-50">
                     <div className="logo">
                        <Link to="/">
                           <img src="/assets/images/site-logo.svg" />
                        </Link>
                     </div>
                     <div className="menu d-flex j-between align-center gap-15">
                        <div
                           onMouseOver={changeHeadersBackground}
                           onMouseOut={defaultHeadersBackground}
                           className="movie"
                        >
                           <Link
                              to="/all-movies"
                              className="underlined d-flex j-between align-center gap-5"
                           >
                              <h3>فیلم</h3>
                              <i className="fa-solid fa-chevron-down icon"></i>
                           </Link>
                           <div className="hide-menu">
                              <ul className="d-flex wrap gap-15 medium-radius">
                                 {renderGenreItems()}
                              </ul>
                           </div>
                        </div>
                        <div
                           onMouseOver={changeHeadersBackground}
                           onMouseOut={defaultHeadersBackground}
                           className="serie"
                        >
                           <Link to="#" className="underlined d-flex j-between align-center gap-5">
                              <h3>سریال</h3>
                              <i className="fa-solid fa-chevron-down icon"></i>
                           </Link>
                           <div className="hide-menu">
                              <ul className="d-flex wrap gap-15 medium-radius">
                                 {renderGenreItems()}
                              </ul>
                           </div>
                        </div>
                        <div className="underlined sort">
                           <Link to="#">
                              <h3>دسته بندی</h3>
                           </Link>
                        </div>
                        <div className="underlined child-teen">
                           <Link to="#">
                              <h3>کودک و نوجوان</h3>
                           </Link>
                        </div>
                        <div className="underlined persian">
                           <Link to="#">
                              <h3>ایرانی</h3>
                           </Link>
                        </div>
                        <div className="underlined inline-cinema">
                           <Link to="#">
                              <h3>سینما آنلاین</h3>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="login d-flex j-between align-center gap-20">
                     <Link to="/search" className="search">
                        <div className="search-holder">
                           <img src="/assets/images/search.svg" />
                        </div>
                     </Link>
                     <Link to="#" className="buy button white mini-radius">
                        <h3>خرید اشتراک</h3>
                     </Link>
                     <Link to="#" className="profile">
                        <div className="pro-holder">
                           <img src="/assets/images/profile.svg" />
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </Style>
   );
}
