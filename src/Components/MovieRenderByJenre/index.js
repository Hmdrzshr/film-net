import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getApi from "../../Utils/getApi";
import Style from "./style";

export default function MovieRenderByJenre(props) {
   const [data, setData] = useState({
      genres: [
         {
            id: "",
            name: "",
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
      return data.genres.map((currentItem) => {
         return (
            <li key={currentItem.id}>
               <div></div>
               <h2>{currentItem.name}</h2>
            </li>
         );
      });
   };
   return (
      <Style>
         <div className="movie-render-by-title">
            <h2>{props.title}</h2>
            <ul className="gap-5">{renderSlide()}</ul>
         </div>
      </Style>
   );
}
