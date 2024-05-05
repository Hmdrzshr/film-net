import Style from "./style";
import Layout from "../../Components/Layout";
import ShowAllMovies from "../../Components/ShowAllMovies";

import SearchTable from "../../Components/SearchTable";
import { useState } from "react";
import getApi from "../../Utils/getApi";
import { Link } from "react-router-dom";

export default function AllMovies() {
   const [typedWord, setTypedWord] = useState("");
   const [inputData, setInputData] = useState({
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
   const [loading, setLoading] = useState("");
   function getInputData(msg) {
      console.log(msg, "hello");
      setTypedWord(msg);
      getApi(setLoading, `search/movie?query=${msg}`, setInputData);
   }
   function showInputData() {
      return inputData.results.map((currentItem, index) => {
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
   }

   return (
      <Style>
         <Layout>
            <div className="all-movies">
               <div className="container">
                  <SearchTable getInputData={getInputData} />
                  <div className="content">
                     {typedWord.length > 0 ? (
                        <ul class="d-flex wrap gap-15">{showInputData()}</ul>
                     ) : (
                        <ShowAllMovies />
                     )}
                  </div>
               </div>
            </div>
         </Layout>
      </Style>
   );
}
