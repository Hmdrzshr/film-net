import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getApi from "../../Utils/getApi";
import Style from "./style";
import Layout from "../../Components/Layout";
import { Input } from "antd";

export default function SingleMovie() {
   const { movieId } = useParams();
   const [currentMovieId, setCurrentMovieId] = useState("");
   const link = `movie/${movieId}?append_to_response=images,translations,credits,similar`;
   const [data, setData] = useState({
      adult: "",
      backdrop_path: "",
      belongs_to_collection: "",
      budget: "",
      genres: [
         {
            id: "",
            name: "",
         },
      ],
      homepage: "",
      id: "",
      imdb_id: "",
      original_language: "",
      original_title: "",
      overview: "",
      popularity: "",
      poster_path: "",
      production_companies: [],
      production_countries: [
         {
            iso_3166_1: "",
            name: "",
         },
      ],
      release_date: "",
      revenue: "",
      runtime: "",
      spoken_languages: [],
      status: "",
      tagline: "",
      title: "",
      video: "",
      vote_average: 7.888,
      vote_count: "",
      images: {
         backdrops: [{ file_path: "" }, { file_path: "" }, { file_path: "" }],
         logos: [{ file_path: "" }],
         posters: [{ file_path: "" }],
      },
      translations: {
         translations: [
            {
               english_name: "",
               data: { title: "" },
            },
         ],
      },
      credits: {
         cast: [
            {
               adult: "",
               gender: "",
               id: "",
               known_for_department: "",
               name: "",
               original_name: "",
               popularity: "",
               profile_path: "",
               cast_id: 1,
               character: "",
               credit_id: "",
               order: 0,
            },
         ],
         crew: [
            {
               adult: "",
               gender: "",
               id: "",
               known_for_department: "",
               name: "",
               original_name: "",
               popularity: "",
               profile_path: "",
               credit_id: "",
               department: "",
               job: "",
            },
         ],
      },
      similar: {
         page: "",
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
      },
   });
   const ITEM_WIDTH = 90;
   const [scrollPosition, setScrollPosition] = useState(0);
   const [scrollPosition_2, setScrollPosition_2] = useState(0);
   const ulRef = useRef();
   const ulRef_2 = useRef();
   const handleScroll = (scrollAmount) => {
      const newScrollPosition = scrollPosition + scrollAmount;
      setScrollPosition(newScrollPosition);
      ulRef.current.scrollLeft = newScrollPosition;
   };
   const handleScroll_2 = (scrollAmount) => {
      const newScrollPosition_2 = scrollPosition_2 + scrollAmount;
      setScrollPosition_2(newScrollPosition_2);
      ulRef_2.current.scrollLeft = newScrollPosition_2;
   };
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      getApi(setLoading, link, setData);
   }, [currentMovieId]);

   // function renderImages(source) {
   //    return source.map((item) => {
   //       return (
   //          <li key={item.file_path}>
   //             <img src={`https://image.tmdb.org/t/p/original${item.file_path}`} />
   //          </li>
   //       );
   //    });
   // }
   function translatedTitle() {
      let translated = "";
      for (let i = 0; i < data.translations.translations.length; i++) {
         if (
            data.translations.translations[i].english_name == "Persian" &&
            data.translations.translations[i].data.title.trim().length >= 1
         ) {
            translated = data.translations.translations[i].data.title;
            return translated;
         }
      }
      if (translated.length == 0) {
         translated = data.title;
         return translated;
      }
   }
   function persentage(vote) {
      let voteNum = parseFloat(vote);

      if (3 <= voteNum && voteNum < 3.5) {
         return <span>%30</span>;
      } else if (3.5 <= voteNum && voteNum < 4) {
         return <span>%35</span>;
      } else if (4 <= voteNum && voteNum < 4.5) {
         return <span>%40</span>;
      } else if (4.5 <= voteNum && voteNum < 5) {
         return <span>%45</span>;
      } else if (5 <= voteNum && voteNum < 5.5) {
         return <span>%50</span>;
      } else if (5.5 <= voteNum && voteNum < 6) {
         return <span>%55</span>;
      } else if (6 <= voteNum && voteNum < 6.5) {
         return <span>%60</span>;
      } else if (6.5 <= voteNum && voteNum < 7) {
         return <span>%65</span>;
      } else if (7 <= voteNum && voteNum < 7.5) {
         return <span>%70</span>;
      } else if (7.5 <= voteNum && voteNum < 8) {
         return <span>%75</span>;
      } else if (8 <= voteNum && voteNum < 8.5) {
         return <span>%80</span>;
      } else if (8.5 <= voteNum && voteNum < 9) {
         return <span>%85</span>;
      } else if (9 <= voteNum && voteNum < 9.5) {
         return <span>%90</span>;
      } else if (9.5 <= voteNum && voteNum < 10) {
         return <span>%95</span>;
      }
   }
   function getMovieDirector() {
      let movieDirector = [];
      data.credits.crew.map((cI) => {
         if (cI.known_for_department == "Directing") {
            movieDirector.push(cI.name);
         }
      });
      if (movieDirector.length == 0) {
         data.credits.cast.map((cI) => {
            if (cI.known_for_department == "Directing") {
               movieDirector.push(cI.name);
            }
         });
      }
      return movieDirector.slice(0, 1).toString();
   }
   function getMovieActors() {
      let movieActors = [];
      data.credits.cast.map((cI) => {
         if (cI.known_for_department == "Acting") {
            movieActors.push(cI.name);
         }
      });
      return movieActors.slice(0, 3).join(" , ");
   }
   function getMovieTime() {
      let houre = data.runtime / 60;
      let minute = data.runtime % 60;
      return (
         <h2>
            {Math.floor(houre)} ساعت و {Math.floor(minute)} دقیقه{" "}
         </h2>
      );
   }
   function movieProductions() {
      return data.production_countries.map((cI) => {
         return <h2>{cI.name}</h2>;
      });
   }
   function movieGenres() {
      return data.genres.map((cI) => {
         if (cI.name == "Crime") {
            return <h2>جنایی</h2>;
         }
         if (cI.name == "War") {
            return <h2>جنگی</h2>;
         }
         if (cI.name == "Adventure") {
            return <h2>ماجرایی</h2>;
         }
         if (cI.name == "Mystery") {
            return <h2>معمایی</h2>;
         }
         if (cI.name == "Romance") {
            return <h2>عاشقانه</h2>;
         }
         if (cI.name == "Science Fiction") {
            return <h2>علمی تخیلی</h2>;
         }
         if (cI.name == "Music") {
            return <h2>موزیکال</h2>;
         }
         if (cI.name == "Horror") {
            return <h2>ترسناک</h2>;
         }
         if (cI.name == "Drama") {
            return <h2>درام</h2>;
         }
         if (cI.name == "Family") {
            return <h2>خانوادگی</h2>;
         }
         if (cI.name == "History") {
            return <h2>تاریخی</h2>;
         }
         if (cI.name == "Action") {
            return <h2>اکشن</h2>;
         }
         if (cI.name == "Comedy") {
            return <h2>کمدی</h2>;
         }
         if (cI.name == "Western") {
            return <h2>وسترن</h2>;
         }
         if (cI.name == "Documentary") {
            return <h2>مستند</h2>;
         }
      });
   }
   function translatedOverview() {
      let translated = "";
      for (let i = 0; i < data.translations.translations.length; i++) {
         if (
            data.translations.translations[i].english_name == "Persian" &&
            data.translations.translations[i].data.overview.trim().length >= 5
         ) {
            translated = data.translations.translations[i].data.overview;
            return translated;
         }
      }
      if (translated.length == 0) {
         translated = data.overview;
         return translated;
      }
   }
   function getActors() {
      let actors = [];
      data.credits.cast.map((cI) => {
         if (cI.known_for_department == "Acting") {
            actors.push({
               peopleName: cI.name,
               peopleImg: cI.profile_path,
               peopleJob: cI.known_for_department,
            });
         }
      });
      return actors.slice(0, 6).map((cI) => {
         return (
            <li key={cI.peopleName} className="d-flex align-center medium-radius">
               <div className="img-holder">
                  {cI.peopleImg ? (
                     <img src={`https://image.tmdb.org/t/p/w500${cI.peopleImg}`} />
                  ) : (
                     <img src="\assets\images\image-not-found.png" />
                  )}
               </div>
               <div className="people-info d-flex column">
                  <h3>{cI.peopleName}</h3>
                  <h3 className="item-color-1">{cI.peopleJob}</h3>
               </div>
            </li>
         );
      });
   }
   function getDubs() {
      let dubs = [];
      data.credits.cast.map((cI) => {
         if (cI.character.includes("voice")) {
            dubs.push({
               peopleName: cI.name,
               peopleImg: cI.profile_path,
               peopleJob: cI.known_for_department,
            });
         }
      });
      return dubs.slice(0, 6).map((cI) => {
         return (
            <li key={cI.peopleName} className="d-flex align-center medium-radius">
               <div className="img-holder">
                  {cI.peopleImg ? (
                     <img src={`https://image.tmdb.org/t/p/w500${cI.peopleImg}`} />
                  ) : (
                     <img src="\assets\images\image-not-found.png" />
                  )}
               </div>
               <div className="people-info">
                  <h3>{cI.peopleName}</h3>
                  <h3 className="item-color-1">{cI.peopleJob}</h3>
               </div>
            </li>
         );
      });
   }
   function getWriter() {
      for (let i = 0; i < data.credits.cast.length; i++) {
         if (data.credits.cast[i].known_for_department == "Writing") {
            return (
               <li key={data.credits.cast[i].name} className="d-flex align-center medium-radius">
                  <div className="img-holder">
                     {data.credits.cast[i].profile_path ? (
                        <img
                           src={`https://image.tmdb.org/t/p/w500${data.credits.cast[i].profile_path}`}
                        />
                     ) : (
                        <img src="\assets\images\image-not-found.png" />
                     )}
                  </div>
                  <div className="people-info">
                     <h3>{data.credits.cast[i].name}</h3>
                     <h3 className="item-color-1">{data.credits.cast[i].known_for_department}</h3>
                  </div>
               </li>
            );
         }
      }
   }
   function getProducter() {
      for (let i = 0; i < data.credits.cast.length; i++) {
         if (data.credits.cast[i].known_for_department == "Production") {
            return (
               <li key={data.credits.cast[i].name} className="d-flex align-center medium-radius">
                  <div className="img-holder">
                     {data.credits.cast[i].profile_path ? (
                        <img
                           src={`https://image.tmdb.org/t/p/w500${data.credits.cast[i].profile_path}`}
                        />
                     ) : (
                        <img src="\assets\images\image-not-found.png" />
                     )}
                  </div>
                  <div className="people-info">
                     <h3>{data.credits.cast[i].name}</h3>
                     <h3 className="item-color-1">{data.credits.cast[i].known_for_department}</h3>
                  </div>
               </li>
            );
         } else if (data.credits.crew[i].known_for_department == "Production") {
            return (
               <li key={data.credits.crew[i].name} className="d-flex align-center medium-radius">
                  <div className="img-holder">
                     {data.credits.crew[i].profile_path ? (
                        <img
                           src={`https://image.tmdb.org/t/p/w500${data.credits.crew[i].profile_path}`}
                        />
                     ) : (
                        <img src="\assets\images\image-not-found.png" />
                     )}
                  </div>
                  <div className="people-info">
                     <h3>{data.credits.crew[i].name}</h3>
                     <h3 className="item-color-1">{data.credits.crew[i].known_for_department}</h3>
                  </div>
               </li>
            );
         }
      }
   }
   function movieGenres2(item) {
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
   function getMovieSimilar() {
      return data.similar.results.map((cI) => {
         return (
            // <li key={cI.id}>
            //    <img src={`https://image.tmdb.org/t/p/original${cI.poster_path}`} />
            //    <h1>{cI.original_title}</h1>
            // </li>
            <li key={cI.id} className="medium-radius">
               <div className="img-holder">
                  {cI.backdrop_path ? (
                     <img src={`https://image.tmdb.org/t/p/w500${cI.poster_path}`} />
                  ) : (
                     <img src="\assets\images\image-not-found.png" />
                  )}
                  <div className="item-content d-flex column gap-10">
                     <Link
                        to={`/single-movie/${cI.id}`}
                        onClick={() => {
                           setCurrentMovieId(cI.id);
                        }}
                     >
                        <h3>{cI.title}</h3>
                     </Link>
                     <h3>{cI.release_date.slice(0, 4)}</h3>
                     <Link to="#" className="d-flex align-center wrap gap-15">
                        {movieGenres2(cI)}
                     </Link>
                  </div>
               </div>
            </li>
         );
      });
   }
   function getInputData(event) {
      var input = document.getElementById("input");
      if (event.target.value.trim() == "") {
         input.value = "";
         return;
      }
      if (event.target.value.trim().length < 3) {
         input.value = "";
         return;
      }
      let peopleCommentsElement = document.getElementById("people-comments");
      let comments = document.createElement("LI");
      comments.innerHTML = `<div class="d-flex column1" ><img src="/assets/images/profile.svg"></img><h2>کاربر *********09</h2></div><div class="column2"><span></span><h2>${event.target.value}</h2></div>`;
      peopleCommentsElement.appendChild(comments);
      input.value = "";
   }
   return (
      <Style>
         <Layout>
            <div className="single-movie-page">
               <div className="single-hero">
                  <div className="poster-holder">
                     {/* {renderImages(data.images.backdrops)} */}
                     <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
                     <div className="left-dark"></div>
                  </div>
                  <div className="hero-movie-info">
                     <div className="container">
                        <div className="hero-movie-content d-flex column gap-15">
                           <div className="translated-title d-flex align-center gap-50">
                              <h1>{translatedTitle()}</h1>
                              <span className="add-to-list">
                                 <svg
                                    width="24"
                                    height="30"
                                    viewBox="0 0 24 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       fill-rule="evenodd"
                                       clip-rule="evenodd"
                                       d="M-0.000488281 3C-0.000488281 1.34315 1.34266 0 2.99951 0H20.9995C22.6564 0 23.9995 1.34315 23.9995 3V26.6719C23.9995 29.0102 21.4431 30.4496 19.4438 29.237L13.5552 25.6656C12.5991 25.0858 11.3999 25.0858 10.4438 25.6656L4.55523 29.237C2.55593 30.4496 -0.000488281 29.0102 -0.000488281 26.6719V3ZM10.499 7C10.499 6.44771 10.9467 6 11.499 6H12.499C13.0513 6 13.499 6.44772 13.499 7V10.502H16.999C17.5513 10.502 17.999 10.9497 17.999 11.502V12.502C17.999 13.0542 17.5513 13.502 16.999 13.502H13.499V17C13.499 17.5523 13.0513 18 12.499 18H11.499C10.9467 18 10.499 17.5523 10.499 17V13.502H6.99899C6.44671 13.502 5.99899 13.0542 5.99899 12.502V11.502C5.99899 10.9497 6.44671 10.502 6.99899 10.502H10.499V7Z"
                                       fill="currentColor"
                                    ></path>
                                 </svg>
                              </span>
                           </div>
                           <div className="english-title item-color-1">
                              <h2>{data.title}</h2>
                           </div>
                           <div className="movie-score d-flex align-center gap-20">
                              <div className="vote d-flex  gap-5">
                                 <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M7.68804 14.5247L5 14.5247C5.00004 11.8858 5.00026 9.68325 5 7.93783C6.77326 7.93783 7.974 5.47812 8.10745 5.18722C8.2409 4.89631 9.7851 1.66263 10.4142 0.810703C11.0433 -0.0412279 11.3293 0.000330372 11.6153 0.000330347C11.9012 0.000330322 12.4922 0.167541 12.4922 0.810703C12.4922 2.51299 11.7276 3.49721 11.6704 5.18722L14.5893 5.18721C15.4128 5.18721 15.9997 5.69611 16 6.10148L16 14.0727C16 14.9537 14.8835 16 13.8574 16L9.63258 16C8.91577 16 8.03755 15.0165 7.68804 14.5247Z"
                                       fill="currentColor"
                                    ></path>
                                    <path
                                       fill-rule="evenodd"
                                       clip-rule="evenodd"
                                       d="M-1.09151e-07 14.7515C-4.88684e-08 15.441 0.453435 16 1.01278 16L3.00512 16C3.56446 16 4.0179 15.441 4.0179 14.7515L4.0179 7.91521C4.0179 7.22566 3.56446 6.66667 3.00512 6.66667L1.01278 6.66667C0.453434 6.66667 -7.67077e-07 7.22566 -7.06795e-07 7.91521L-1.09151e-07 14.7515Z"
                                       fill="currentColor"
                                    ></path>
                                 </svg>
                                 {persentage(data.vote_average)}
                              </div>
                              <div className="imdb-score d-flex align-center gap-10">
                                 <a
                                    className="imdb-link"
                                    href={`https://www.imdb.com/title/${data.imdb_id}`}
                                    target="_blank"
                                 >
                                    <span className="imdb-logo">
                                       <svg viewBox="0 0 44 18" width="44" height="18">
                                          <path
                                             d="M0,0.2h4.6v17.5H0V0.2z M14.3,0.2l-1.1,8.2L12.6,4c-0.2-1.4-0.4-2.7-0.5-3.7H6.1v17.5h4l0-11.6l1.7,11.6h2.8
l1.6-11.8l0,11.8h4V0.2H14.3z M27.3,3.4c0.2,0.1,0.3,0.3,0.3,0.5c0.1,0.2,0.1,0.7,0.1,1.5v6.8c0,1.2-0.1,1.9-0.2,2.1
c-0.2,0.3-0.6,0.4-1.2,0.4V3.2C26.8,3.2,27.2,3.3,27.3,3.4z M27.3,17.8c1.1,0,1.9-0.1,2.5-0.2c0.5-0.1,1-0.3,1.4-0.6
c0.4-0.3,0.6-0.7,0.8-1.2c0.1-0.5,0.2-1.6,0.2-3.2V6.4c0-1.7-0.1-2.8-0.2-3.3c-0.1-0.6-0.4-1.1-0.8-1.5c-0.4-0.5-1-0.8-1.8-1
c-0.8-0.2-2-0.3-4.3-0.3h-3.4v17.5L27.3,17.8L27.3,17.8z M39.6,13.5c0,0.8,0,1.4-0.1,1.6c-0.1,0.2-0.5,0.3-0.7,0.3
c-0.3,0-0.5-0.1-0.5-0.3c-0.1-0.2-0.1-0.7-0.1-1.5V9c0-0.8,0-1.3,0.1-1.5c0.1-0.2,0.3-0.3,0.5-0.3c0.3,0,0.7,0.1,0.7,0.3
c0.1,0.2,0.1,0.7,0.1,1.5V13.5z M33.7,0.2v17.5h4.1l0.3-1.1c0.4,0.4,0.8,0.8,1.2,1c0.4,0.2,1.1,0.3,1.6,0.3c0.7,0,1.3-0.2,1.9-0.6
c0.5-0.4,0.9-0.8,1-1.3c0.1-0.5,0.2-1.3,0.2-2.3V8.8c0-1.1,0-1.8-0.1-2.1c0-0.3-0.2-0.7-0.4-1c-0.2-0.3-0.6-0.6-1-0.8
c-0.4-0.2-1-0.3-1.6-0.3c-0.5,0-1.2,0.1-1.6,0.3c-0.4,0.2-0.9,0.5-1.2,0.9V0.2H33.7z"
                                          ></path>
                                       </svg>
                                    </span>
                                 </a>
                                 <span className="imdb-vote">{data.vote_average.toFixed(2)}</span>
                              </div>
                           </div>
                           <div className="age">
                              {data.adult ? (
                                 <h2>مناسب برای افراد بیشتر از 18 سال</h2>
                              ) : (
                                 <h2>مناسب برای افراد بیشتر از 13 سال</h2>
                              )}
                           </div>
                           <div className="movie-director d-flex align-center gap-30">
                              <h2 className="static item-color-1">کارگردان:</h2>
                              <h2 className="dynamic">{getMovieDirector()}</h2>
                           </div>
                           <div className="movie-actors d-flex align-center gap-30">
                              <h2 className="static item-color-1">بازیگران:</h2>
                              <h2 className="dynamic">{getMovieActors()}</h2>
                           </div>
                           <div className="time-production d-flex align-center gap-10">
                              <div className="movie-time d-flex align-center gap-10">
                                 <i className="fa-solid fa-clock"></i>
                                 <span>{getMovieTime()}</span>
                              </div>
                              <div className="dash">
                                 <span>-</span>
                              </div>
                              <div className="movie-production d-flex align-center gap-10">
                                 {movieProductions()}
                              </div>
                              <div className="movie-subtitle d-flex align-center gap-5">
                                 <span className="sub-icon">
                                    <svg
                                       width="27"
                                       height="20"
                                       viewBox="0 0 27 20"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M0 1C0 0.447715 0.447714 0 0.999999 0H25.6667C26.219 0 26.6667 0.447715 26.6667 1V19C26.6667 19.5523 26.219 20 25.6667 20H1C0.447715 20 0 19.5523 0 19V1ZM24.8928 16.7778C24.8928 17.3301 24.4451 17.7778 23.8928 17.7778H11.6706C11.1183 17.7778 10.6706 17.3301 10.6706 16.7778V16.5556C10.6706 16.0033 11.1183 15.5556 11.6706 15.5556H23.8928C24.4451 15.5556 24.8928 16.0033 24.8928 16.5556V16.7778ZM16.0026 12.329C16.0026 12.8813 15.5549 13.329 15.0026 13.329H2.78038C2.2281 13.329 1.78038 12.8813 1.78038 12.329V12.1068C1.78038 11.5545 2.22809 11.1068 2.78038 11.1068H15.0026C15.5549 11.1068 16.0026 11.5545 16.0026 12.1068V12.329ZM8.89497 16.7778C8.89497 17.3301 8.44725 17.7778 7.89497 17.7778H2.78385C2.23157 17.7778 1.78385 17.3301 1.78385 16.7778V16.5556C1.78385 16.0033 2.23157 15.5556 2.78385 15.5556H7.89497C8.44725 15.5556 8.89497 16.0033 8.89497 16.5556V16.7778ZM18.7782 13.329C18.2259 13.329 17.7782 12.8813 17.7782 12.329V12.1068C17.7782 11.5545 18.2259 11.1068 18.7782 11.1068H23.8893C24.4416 11.1068 24.8893 11.5545 24.8893 12.1068V12.329C24.8893 12.8813 24.4416 13.329 23.8893 13.329H18.7782Z"
                                          fill="currentColor"
                                       ></path>
                                    </svg>
                                 </span>
                                 <h2>زیرنویس</h2>
                              </div>
                              <div className="movie-tranlation d-flex align-center gap-10">
                                 <i className="fa-solid fa-microphone"></i>
                                 <h2>دوبله اختصاصی</h2>
                              </div>
                           </div>
                           <div className="movie-genres d-flex align-center gap-10">
                              {movieGenres()}
                           </div>
                           <div className="movie-buttons d-flex align-center gap-30">
                              <div className="preview-watch medium-radius">
                                 <h2>پیش نمایش</h2>
                              </div>
                              <div className="movie-like">
                                 <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M8.25 19.6559L7.74999 19.6559L7.75 19.1559C7.75001 18.1564 7.75005 17.2071 7.75008 16.3085C7.75016 14.2414 7.75023 12.4431 7.75 10.9224L7.74992 10.4223L8.25 10.4223C9.12503 10.4223 9.92589 9.80651 10.5755 9.0209C11.2093 8.25434 11.605 7.43867 11.6799 7.27554C11.7665 7.08656 12.2937 5.97922 12.8976 4.78592C13.4927 3.60973 14.1919 2.28999 14.6155 1.71636C15.0251 1.16175 15.3661 0.835859 15.6996 0.663404C16.0252 0.495059 16.3055 0.498187 16.4734 0.500062C16.4897 0.500243 16.5049 0.500413 16.5191 0.500413C16.7738 0.500413 17.1499 0.570504 17.4783 0.789251C17.8328 1.02528 18.1153 1.42782 18.1153 2.01338C18.1153 3.15581 17.8566 4.05591 17.6079 4.89634C17.6013 4.91847 17.5948 4.94056 17.5883 4.96261C17.391 5.62859 17.2049 6.25716 17.1249 6.98402L20.2366 6.98402C20.8531 6.98402 21.3957 7.17421 21.7943 7.45819C22.1717 7.72705 22.4996 8.14445 22.5 8.62649L22.5 8.62685L22.5 18.5909C22.5 19.3365 22.0434 20.0627 21.4789 20.5778C20.9071 21.0995 20.1227 21.5 19.3217 21.5L14.0407 21.5C13.7062 21.5 13.3873 21.3868 13.1103 21.2401C12.8303 21.0918 12.5636 20.8935 12.3248 20.6855C11.9409 20.3511 11.6006 19.9666 11.3592 19.6559L8.25 19.6559Z"
                                       stroke="currentColor"
                                    ></path>
                                    <path
                                       d="M3.26597 21.5C2.19797 21.5 1.5 20.4746 1.5 19.4393L1.5 10.894C1.5 9.85878 2.19797 8.83334 3.26597 8.83334L5.7564 8.83334C6.8244 8.83334 7.52237 9.85878 7.52237 10.894L7.52237 19.4393C7.52237 20.4746 6.8244 21.5 5.7564 21.5L3.26597 21.5Z"
                                       stroke="currentColor"
                                    ></path>
                                 </svg>
                              </div>
                              <div className="movie-unlike">
                                 <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M15.75 4.34412L16.25 4.34412L16.25 4.84412C16.25 5.84356 16.25 6.79291 16.2499 7.69145C16.2498 9.75863 16.2498 11.5569 16.25 13.0776L16.2501 13.5777L15.75 13.5777C14.875 13.5777 14.0741 14.1935 13.4245 14.9791C12.7907 15.7457 12.395 16.5613 12.3201 16.7245C12.2335 16.9134 11.7063 18.0208 11.1024 19.2141C10.5073 20.3903 9.80805 21.71 9.38445 22.2836C8.9749 22.8382 8.63392 23.1641 8.30037 23.3366C7.97476 23.5049 7.69454 23.5018 7.52663 23.4999C7.51032 23.4998 7.49507 23.4996 7.48094 23.4996C7.22623 23.4996 6.85012 23.4295 6.52165 23.2107C6.16722 22.9747 5.88475 22.5722 5.88475 21.9866C5.88475 20.8442 6.14341 19.9441 6.39212 19.1037C6.39867 19.0815 6.40521 19.0594 6.41174 19.0374C6.60897 18.3714 6.79512 17.7428 6.87513 17.016L3.76343 17.016C3.1469 17.016 2.6043 16.8258 2.20569 16.5418C1.8283 16.2729 1.50035 15.8556 1.5 15.3735L1.5 15.3731L1.5 5.4091C1.5 4.66349 1.95655 3.93732 2.52115 3.4222C3.09294 2.90051 3.87732 2.5 4.67827 2.5L9.95927 2.5C10.2938 2.5 10.6127 2.61318 10.8897 2.75985C11.1697 2.9082 11.4364 3.10651 11.6752 3.31452C12.0591 3.64893 12.3994 4.03339 12.6408 4.34412L15.75 4.34412Z"
                                       stroke="currentColor"
                                    ></path>
                                    <path
                                       d="M20.734 2.5C21.802 2.5 22.5 3.52544 22.5 4.56067L22.5 13.106C22.5 14.1412 21.802 15.1667 20.734 15.1667L18.2436 15.1667C17.1756 15.1667 16.4776 14.1412 16.4776 13.106L16.4776 4.56067C16.4776 3.52544 17.1756 2.5 18.2436 2.5L20.734 2.5Z"
                                       stroke="currentColor"
                                    ></path>
                                 </svg>
                              </div>
                           </div>
                           <div className="movie-overview">
                              <h2>چکیده داستان</h2>
                              <p>{translatedOverview()}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container">
                  <div className="movie-characters">
                     <h2>ستارگان</h2>
                     <ul ref={ulRef} className="d-flex align-center gap-10">
                        {data.credits.cast[0].character.includes("voice") ? getDubs() : getActors()}
                        {getWriter()}
                        {getProducter()}
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

                  <div className="movie-similar">
                     <h2>مشابه {translatedTitle()}</h2>
                     <ul ref={ulRef_2} className="d-flex gap-10">
                        {getMovieSimilar()}
                     </ul>
                     <div
                        onClick={() => {
                           handleScroll_2(-ITEM_WIDTH);
                        }}
                        onMouseDown={() => {
                           handleScroll_2(-ITEM_WIDTH);
                        }}
                        className="scroll-left"
                     >
                        <i class="fa-solid fa-angle-left"></i>
                     </div>
                     <div
                        onClick={() => {
                           handleScroll_2(ITEM_WIDTH);
                        }}
                        onMouseDown={() => {
                           handleScroll_2(ITEM_WIDTH);
                        }}
                        className="scroll-right"
                     >
                        <i class="fa-solid fa-angle-right"></i>
                     </div>
                  </div>
               </div>
               <div className="movie-comments">
                  <h2>دیدگاه بینندگان</h2>
                  <div className="text-place mini-radius d-flex gap-10 align-center">
                     <img src="/assets/images/profile.svg"></img>
                     <div className="input-element">
                        <Input
                           id="input"
                           type="text"
                           placeholder="دیدگاه خود را بنویسید..."
                           onPressEnter={(event) => {
                              getInputData(event);
                           }}
                        />
                        <div className="telegram-icon full-radius">
                           <span>
                              <svg
                                 width="14"
                                 height="12"
                                 viewBox="0 0 14 12"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M13.5226 1.26787L0.990574 0.44236C0.922234 0.437861 0.853999 0.452583 0.793593 0.484859C0.733188 0.517135 0.683025 0.565678 0.648781 0.62499C0.614537 0.684302 0.59758 0.752015 0.599831 0.820466C0.602081 0.888917 0.62345 0.955371 0.661516 1.01231L7.64305 11.4529C7.68221 11.5113 7.73733 11.5573 7.80185 11.5852C7.86637 11.6132 7.93758 11.622 8.00698 11.6107C8.07638 11.5993 8.14105 11.5683 8.1933 11.5212C8.24554 11.4741 8.28316 11.413 8.30167 11.3452L9.44276 7.13691C9.46119 7.0688 9.45959 6.99681 9.43815 6.92959C9.41671 6.86236 9.37633 6.80274 9.32186 6.75789L5.3705 3.50484C5.34694 3.48548 5.32857 3.46056 5.31707 3.43232C5.30556 3.40408 5.30128 3.37342 5.30461 3.34311L5.31518 3.29838C5.32965 3.25962 5.35679 3.22689 5.39221 3.20551C5.42763 3.18412 5.46923 3.17534 5.51027 3.18058L5.55172 3.19096L10.371 4.99654C10.437 5.02111 10.5087 5.02614 10.5775 5.01103C10.6463 4.99593 10.7093 4.96132 10.759 4.91136L13.7588 1.89312C13.8085 1.84322 13.8428 1.78007 13.8576 1.71122C13.8723 1.64237 13.867 1.57072 13.8421 1.50483C13.8173 1.43894 13.774 1.3816 13.7174 1.33965C13.6609 1.29769 13.5928 1.27254 13.5226 1.26787Z"
                                    fill="#fff"
                                 ></path>
                              </svg>
                           </span>
                        </div>
                     </div>
                  </div>
                  <ul id="people-comments"></ul>
               </div>
            </div>
         </Layout>
      </Style>
   );
}

{
   /* <ul className="backdrops d-flex">{renderImages(data.images.backdrops)}</ul>
         <ul className="logos d-flex">{renderImages(data.images.logos)}</ul>
         <ul className="posters d-flex">{renderImages(data.images.posters)}</ul> */
}
