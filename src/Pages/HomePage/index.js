import Layout from "../../Components/Layout";
import Style from "./style";
import HomePageHero from "../../Components/HomePageHero";
import MovieRenderByTitle from "../../Components/MovieRenderByTitle";
import MovieRenderByGenre from "../../Components/MovieRenderByGenre";
import MovieRenderByTitleType2 from "../../Components/MovieRenderByTitleType2";

export default function HomePage() {
   window.scrollTo(0, 0);
   {
      var prevScrollpos = window.pageYOffset;
   }
   window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
         document.getElementById("header").style.top = "0";
         document.getElementById("dynamic-footer").style.bottom = "-70px";
      } else if (window.pageYOffset > "1600") {
         document.getElementById("dynamic-footer").style.bottom = "-70px";
      } else {
         document.getElementById("header").style.top = "-70px";
         document.getElementById("dynamic-footer").style.bottom = "0";
      }
      prevScrollpos = currentScrollPos;
      console.log(window.pageYOffset);
   };
   return (
      <Style>
         <Layout>
            <div className="home-page">
               <div className="hero-section">
                  <HomePageHero />
               </div>
               <div className="content-section">
                  <div className="container">
                     <div className="vijhe">
                        <MovieRenderByTitle title="ویژه" wrap={true} link="movie/popular" />
                     </div>
                     <div className="bartarin">
                        <MovieRenderByTitleType2 title="برترین ها" link="movie/top_rated" />
                     </div>
                     <div className="genre">
                        <MovieRenderByGenre title="ژانر" link="genre/movie/list" />
                     </div>
                     <div className="soon">
                        <MovieRenderByTitleType2 title="به زودی" link="movie/upcoming" />
                     </div>
                  </div>
               </div>
            </div>
         </Layout>
      </Style>
   );
}
