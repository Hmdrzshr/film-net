import Style from "./style";
import Layout from "../../Components/Layout";
import ShowAllMovies from "../../Components/ShowAllMovies";

import SearchTable from "../../Components/SearchTable";
import { useEffect, useState } from "react";
import getApi from "../../Utils/getApi";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";

export default function AllMovies() {
   const [typedWord, setTypedWord] = useState("");
   const [inputData, setInputData] = useState({
      results: [
         {
            adult: "",
            backdrop_path: "",
            genre_ids: [],
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
      total_pages: "",
   });
   const [searchParams, setSearchParams] = useSearchParams();
   const [loading, setLoading] = useState("");
   const [pageNum, setPageNum] = useState("1");
   useEffect(() => {
      if (searchParams.get("query") && searchParams.get("query") != "") {
         getApi(setLoading, `search/movie?query=${searchParams.get("query")}`, setInputData);
      }
   }, []);

   function getInputData(msg) {
      setTypedWord(msg);
      getApi(setLoading, `search/movie?query=${msg}&page=${pageNum}`, setInputData);
      setSearchParams(
         createSearchParams({
            query: msg,
            page: pageNum,
         })
      );
   }
   function movieGenres(item) {
      return item.genre_ids.map((cI) => {
         if (cI == "Crime") {
            return <h3>جنایی</h3>;
         }
         if (cI == "War") {
            return <h3>جنگی</h3>;
         }
         if (cI == "12") {
            return <h3>ماجرایی</h3>;
         }
         if (cI == "9648") {
            return <h3>معمایی</h3>;
         }
         if (cI == "10749") {
            return <h3>عاشقانه</h3>;
         }
         if (cI == "878") {
            return <h3>علمی تخیلی</h3>;
         }
         if (cI == "10402") {
            return <h3>موزیکال</h3>;
         }
         if (cI == "27") {
            return <h3>ترسناک</h3>;
         }
         if (cI == "18") {
            return <h3>درام</h3>;
         }
         if (cI == "10751") {
            return <h3>خانوادگی</h3>;
         }
         if (cI == "36") {
            return <h3>تاریخی</h3>;
         }
         if (cI == "28") {
            return <h3>اکشن</h3>;
         }
         if (cI == "35") {
            return <h3>کمدی</h3>;
         }
         if (cI == "37") {
            return <h3>وسترن</h3>;
         }
         if (cI == "99") {
            return <h3>مستند</h3>;
         }
      });
   }
   function showInputData() {
      if (inputData.results.length === 0) {
         return <h2 className="free-answer">موردی یافت نشد</h2>;
      }
      return inputData.results.map((currentItem, index) => {
         return (
            <li id={`item-${index}`} className={`item-${index} medium-radius`} key={currentItem.id}>
               <div className="content">
                  <div className="img-holder">
                     {currentItem.backdrop_path ? (
                        <img src={`https://image.tmdb.org/t/p/w500${currentItem.poster_path}`} />
                     ) : (
                        <img src="\assets\images\image-not-found.png" />
                     )}
                  </div>
                  <div className="item-content d-flex column gap-10">
                     <Link to={`/single-movie/${currentItem.id}`}>
                        <h3>{currentItem.title}</h3>
                     </Link>
                     <h3>{currentItem.release_date.slice(0, 4)}</h3>
                     <Link to="#" className="d-flex align-center wrap gap-15">
                        {movieGenres(currentItem)}
                     </Link>
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
                  <SearchTable
                     getInputData={getInputData}
                     initialWord={searchParams.get("query")}
                  />
                  <div className="all-movies-content">
                     {inputData.results.length > 2 ? (
                        <div className="searched-movies-section">
                           <ul className="d-flex wrap gap-15 slide-of-movies">{showInputData()}</ul>
                           <div className="pagination-part d-flex align-center j-center">
                              <Pagination
                                 defaultCurrent={1}
                                 total={inputData.total_pages}
                                 showSizeChanger={false} // ba in attribute tedad'e fil dar safero khamush kardim chon hamchin api'i tu in site nadarim
                                 onChange={(e) => {
                                    setSearchParams(
                                       createSearchParams({
                                          query: typedWord,
                                          page: e,
                                       })
                                    );
                                    getApi(
                                       setLoading,
                                       `search/movie?query=${typedWord}&page=${e}`,
                                       setInputData
                                    );
                                 }}
                              />
                           </div>
                        </div>
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
