import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import getApi from "../../Utils/getApi";
import Style from "./style";
import { genreList } from "../../Utils/genreList";

export default function MovieRenderByGenre(props) {
   const ITEM_WIDTH = 90;
   const [scrollPosition, setScrollPosition] = useState(0);
   const ulRef = useRef();
   const renderSlide = () => {
      return genreList.map((currentItem) => {
         return (
            <li key={currentItem.genreName} className="medium-radius">
               <div className="img-holder medium-radius">
                  {currentItem.genreImg ? (
                     <img src={currentItem.genreImg} />
                  ) : (
                     <img src="\assets\images\image-not-found.png" />
                  )}
               </div>
               <h3>{currentItem.genreName}</h3>
            </li>
         );
      });
   };
   const handleScroll = (scrollAmount) => {
      const newScrollPosition = scrollPosition + scrollAmount;
      setScrollPosition(newScrollPosition);
      ulRef.current.scrollLeft = newScrollPosition;
   };
   return (
      <Style>
         <div className="movie-render-by-genre">
            <h2>{props.title}</h2>
            <ul ref={ulRef} className="d-flex align-center gap-20">
               {renderSlide()}
            </ul>
            <div
               onClick={() => {
                  handleScroll(-ITEM_WIDTH);
               }}
               onMouseDown={() => {
                  handleScroll(-ITEM_WIDTH);
               }}
               className="scroll-left"
            >
               <i class="fa-solid fa-angle-left"></i>
            </div>
            <div
               onClick={() => {
                  handleScroll(ITEM_WIDTH);
               }}
               onMouseDown={() => {
                  handleScroll(ITEM_WIDTH);
               }}
               className="scroll-right"
            >
               <i class="fa-solid fa-angle-right"></i>
            </div>
         </div>
      </Style>
   );
}
