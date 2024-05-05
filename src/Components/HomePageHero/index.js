import { useEffect, useState } from "react";
import Style from "./style";
import { Link } from "react-router-dom";
import getApi from "../../Utils/getApi";

export default function HomePageHero() {
   const [data, setData] = useState({
      results: [
         {
            adult: "",
            backdrop_path: "",
            genre_ids: "",
            id: "",
            original_language: "",
            original_title: "",
            overview: "",
            popularity: "",
            poster_path: "",
            release_date: "",
            title: "",
            video: "",
            vote_average: "",
            vote_count: "",
         },
      ],
   });
   const [loading, setLoading] = useState(false);
   const [slideElement, setSlideElement] = useState("item-0");
   const link = "movie/now_playing";
   const goToNextSlide = (index) => {
      if (slideElement == `item-19`) {
         document.getElementById(`item-19`).style.zIndex = "-1";
         document.getElementById(`item-0`).style.zIndex = "2";
         setSlideElement(`item-0`);
      } else {
         document.getElementById(`item-${index + 1}`).style.zIndex = "2";
         document.getElementById(`item-${index}`).style.zIndex = "-1";
         setSlideElement(`item-${index + 1}`);
         console.log(index);
      }
   };
   const backToPrevSlide = (index) => {
      if (slideElement == `item-0`) {
         document.getElementById(`item-0`).style.zIndex = "-1";
         document.getElementById(`item-19`).style.zIndex = "2";
         setSlideElement(`item-19`);
      } else {
         document.getElementById(`item-${index - 1}`).style.zIndex = "2";
         document.getElementById(`item-${index}`).style.zIndex = "-1";
         setSlideElement(`item-${index - 1}`);
         console.log(slideElement);
      }
   };
   useEffect(() => {
      getApi(setLoading, link, setData);
   }, []);
   const renderSlide = () => {
      return data.results.map((currentItem, index) => {
         return (
            <li id={`item-${index}`} className={`item-${index}`} key={currentItem.id}>
               <div className="holder">
                  <img src={`https://image.tmdb.org/t/p/original${currentItem.backdrop_path}`} />
                  <div className="hero-content">
                     <div className="container">
                        <div className="line-1 d-flex align-center gap-15">
                           <div className="title ">
                              <Link to={`/single-movie/${currentItem.id}`}>
                                 <h1>{currentItem.title}</h1>
                              </Link>
                           </div>
                           <div className="time">
                              <Link to="#">{`تاریخ انتشار ${currentItem.release_date}`}</Link>
                           </div>
                        </div>
                        <div className="line-2 d-flex j-between">
                           <div className="watch-info d-flex gap-15">
                              <div className="watch">
                                 <Link
                                    to="#"
                                    className="button mini-radius red d-flex gap-5 align-center"
                                 >
                                    <i className="fa-solid fa-play"></i>
                                    <span>تماشا کنید</span>
                                 </Link>
                              </div>
                              <div className="more-info">
                                 <Link
                                    to="#"
                                    className="button gray mini-radius d-flex gap-5 align-center"
                                 >
                                    <i className="fa-solid fa-circle-info"></i>
                                    <span>اطلاعات بیشتر</span>
                                 </Link>
                              </div>
                           </div>
                           <div className="next-prev d-flex gap-15">
                              <div className="prev">
                                 <Link
                                    className="button gray full-radius"
                                    onClick={(e) => {
                                       console.log(e);
                                       {
                                          setSlideElement(
                                             e.target.parentNode.parentNode.parentNode.parentNode
                                                .parentNode.parentNode.parentNode.parentNode
                                                .parentNode.id
                                          );
                                       }
                                       backToPrevSlide(index);
                                    }}
                                 >
                                    <span>
                                       <img src="/assets/images/right-arrow.svg" />
                                    </span>
                                 </Link>
                              </div>
                              <div className="next">
                                 <Link
                                    className="button gray full-radius"
                                    onClick={(e) => {
                                       {
                                          setSlideElement(
                                             e.target.parentNode.parentNode.parentNode.parentNode
                                                .parentNode.parentNode.parentNode.parentNode
                                                .parentNode.id
                                          );
                                       }
                                       goToNextSlide(index);
                                    }}
                                 >
                                    <span>
                                       <img src="/assets/images/left-arrow.svg" />
                                    </span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </li>
         );
      });
   };
   return (
      <Style>
         <div className="home-page-hero">
            <ul>{renderSlide()}</ul>
         </div>
      </Style>
   );
}
