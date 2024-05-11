import { Link } from "react-router-dom";
import Style from "./style";
import { genreList } from "../../../Utils/genreList";
import { useState } from "react";

export default function Header() {
   const [movieItemIsHovered, setMovieItemIsHovered] = useState(false);
   const [serieItemIsHovered, setSerieItemIsHovered] = useState(false);
   function changeHeadersBackgroundForMovie() {
      setMovieItemIsHovered(true);
   }
   function defaultHeadersBackgroundForMovie() {
      setMovieItemIsHovered(false);
   }
   function changeHeadersBackgroundForSerie() {
      setSerieItemIsHovered(true);
   }
   function defaultHeadersBackgroundForSerie() {
      setSerieItemIsHovered(false);
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
         <div
            id="header"
            className={`header ${movieItemIsHovered ? "hover-background" : ""} ${
               serieItemIsHovered ? "hover-background" : ""
            }`}
         >
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
                           onMouseOver={changeHeadersBackgroundForMovie}
                           onMouseOut={defaultHeadersBackgroundForMovie}
                           className="movie"
                        >
                           <Link
                              to="/all-movies"
                              className="underlined d-flex j-between align-center gap-5"
                           >
                              <h3>فیلم</h3>
                              <i className="fa-solid fa-chevron-down icon"></i>
                           </Link>

                           <ul
                              className={`header d-flex wrap gap-15 medium-radius ${
                                 movieItemIsHovered ? "show" : "hidden"
                              }`}
                           >
                              {renderGenreItems()}
                           </ul>
                        </div>
                        <div
                           onMouseOver={changeHeadersBackgroundForSerie}
                           onMouseOut={defaultHeadersBackgroundForSerie}
                           className="serie"
                        >
                           <Link
                              to="/all-movies"
                              className="underlined d-flex j-between align-center gap-5"
                           >
                              <h3>سریال</h3>
                              <i className="fa-solid fa-chevron-down icon"></i>
                           </Link>

                           <ul
                              className={`header d-flex wrap gap-15 medium-radius ${
                                 serieItemIsHovered ? "show" : "hidden"
                              }`}
                           >
                              {renderGenreItems()}
                           </ul>
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
                     <Link to="/all-movies" className="search">
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
