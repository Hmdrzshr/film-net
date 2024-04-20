import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getApi from "../../Utils/getApi";
import Style from "./style";

export default function MovieRenderByTitle(props) {
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
   const [titleTranslation, setTitleTranslation] = useState({ translations: "" });
   const [loading, setLoading] = useState(false);
   const [slideElement, setSlideElement] = useState("item-0");
   const link = props.link;
   useEffect(() => {
      getApi(setLoading, link, setData);
   }, []);
   const renderSlide = () => {
      return data.results.map((currentItem) => {
         return (
            <li>
               <img src={`https://image.tmdb.org/t/p/original${currentItem.backdrop_path}`} />
            </li>
         );
      });
   };
   return (
      <Style>
         <div className="movie-render-by-title">
            <h2>{props.title}</h2>
            <ul class="gap-5">{renderSlide()}</ul>
         </div>
      </Style>
   );
}
