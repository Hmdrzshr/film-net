import { Link } from "react-router-dom";
import Style from "./style";

export default function Header() {
   return (
      <Style>
         <div className="header">
            <div className="container">
               <div className="header-contents d-flex j-between align-center">
                  <div className="logo-menu d-flex j-between align-center gap-30">
                     <div className="logo">
                        <Link to="/">
                           <img src="/assets/images/site-logo.svg" />
                        </Link>
                     </div>
                     <div className="menu d-flex j-between align-center gap-15">
                        <Link to="#" className="d-flex j-between align-center gap-5">
                           <h3>فیلم</h3>
                           <i className="fa-solid fa-chevron-down"></i>
                        </Link>
                        <Link to="#" className="d-flex j-between align-center gap-5">
                           <h3>سریال</h3>
                           <i className="fa-solid fa-chevron-down"></i>
                        </Link>
                        <Link to="#">
                           <h3>دسته بندی</h3>
                        </Link>
                        <Link to="#">
                           <h3>کودک و نوجوان</h3>
                        </Link>
                        <Link to="#">
                           <h3>ایرانی</h3>
                        </Link>
                        <Link to="#">
                           <h3>سینما آنلاین</h3>
                        </Link>
                     </div>
                  </div>
                  <div className="login d-flex j-between align-center gap-20">
                     <Link to="#" className="search">
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
