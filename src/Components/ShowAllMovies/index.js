import { useEffect, useState } from "react";
import Style from "./style";
import { Link } from "react-router-dom";
import getApi from "../../Utils/getApi";

export default function ShowAllMovies() {
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
   const link = "discover/movie";
   useEffect(() => {
      getApi(setLoading, link, setData);
   }, []);
   const renderSlide = () => {
      return data.results.map((currentItem, index) => {
         return (
            <li id={`item-${index}`} className={`item-${index}`} key={currentItem.id}>
               <div className="content">
                  <div className="img-holder">
                     <img src={`https://image.tmdb.org/t/p/original${currentItem.poster_path}`} />
                  </div>
                  <div className="detail">
                     <div className="title ">
                        <Link to={`/single-movie/${currentItem.id}`}>
                           <h1>{currentItem.title}</h1>
                        </Link>
                     </div>
                  </div>
               </div>
            </li>
         );
      });
   };
   return (
      <Style>
         <div className="showed-content">
            <ul className="d-flex wrap gap-15">{renderSlide()}</ul>
         </div>
      </Style>
   );
}
