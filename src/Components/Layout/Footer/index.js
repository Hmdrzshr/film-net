import { Fragment } from "react";
import Style from "./style";
import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <Style>
         <div id="dynamic-footer" className="dynamic-footer d-flex j-between align-center">
            <div className="menu d-flex align-center gap-35">
               <div className="go-top">
                  <Link to="item-0" className="mini-radius">
                     <img src="/assets/images/go-top.svg" />
                  </Link>
               </div>
               <div className="links d-flex align-center gap-15">
                  <Link to="#">
                     <h3>پرسش های متداول</h3>
                  </Link>
                  <Link to="/contact-us">
                     <h3>تماس با ما</h3>
                  </Link>
                  <Link to="#">
                     <h3>قوانین و مقررات</h3>
                  </Link>
                  <Link to="/about-us">
                     <h3>شبکه های اجتماعی</h3>
                  </Link>
               </div>
            </div>
            <div className="get-app d-flex j-between align-center gap-10">
               <span>
                  <img src="/assets/images/get-app.svg" />
               </span>
               <Link to="#">
                  <h3>دریافت اپلیکیشن های فیلم نت</h3>
               </Link>
            </div>
         </div>
         <div className="footer">
            <div className="container">
               <div className="footer-contents">
                  <div className="info d-flex j-between align-center">
                     <div className="logo">
                        <Link to="/">
                           <img src="/assets/images/site-logo.svg" />
                        </Link>
                     </div>
                     <div className="menu d-flex j-between align-center">
                        <Link to="#">
                           <h3>پرسش های متداول</h3>
                        </Link>
                        <Link to="/contact-us">
                           <h3>تماس با ما</h3>
                        </Link>
                        <Link to="/about-us">
                           <h3>درباره فیلم نت</h3>
                        </Link>
                        <Link to="#">
                           <h3>قوانین و مقررات</h3>
                        </Link>
                     </div>
                     <div className="get-app d-flex j-between align-center">
                        <span>
                           <img src="/assets/images/get-app.svg" />
                        </span>
                        <Link to="#">
                           <h3>دریافت اپلیکیشن های فیلم نت</h3>
                        </Link>
                     </div>
                  </div>
                  <div className="social-media d-flex j-between align-center">
                     <div className="go-top">
                        <Link to="#" className="mini-radius">
                           <img src="/assets/images/go-top.svg" />
                        </Link>
                     </div>
                     <div className="media d-flex align-center">
                        <a href="#" className="linked-in">
                           <img src="/assets/images/linked-in.svg" />
                        </a>
                        <a href="#" className="twitter">
                           <img src="/assets/images/twitter.svg" />
                        </a>
                        <a href="#" className="telegram">
                           <img src="/assets/images/telegram.svg" />
                        </a>
                        <a href="#" className="instagram">
                           <img src="/assets/images/instagram.svg" />
                        </a>
                     </div>
                  </div>
                  <div className="copyright d-flex j-between">
                     <div className="text">
                        <p>
                           کلیه‌ی حقوق مادی و معنوی اپلیکیشن «فیلم‌نت» متعلق به شرکت «پارس فیلم‌نت»
                           است.
                        </p>
                     </div>
                     <div className="certificates d-flex j-between align-center">
                        <div className="icon">
                           <a href="/" className="samandehi">
                              <img src="https://filmnet.ir/static/images/footer/neshane_sabt.svg" />
                           </a>
                        </div>
                        <div className="icon">
                           <a href="/" className="enemad">
                              <img src="https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777" />
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Style>
   );
}
