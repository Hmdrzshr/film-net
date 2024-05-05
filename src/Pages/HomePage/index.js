import Layout from "../../Components/Layout";
import Style from "./style";
import HomePageHero from "../../Components/HomePageHero";
import MovieRenderByTitle from "../../Components/MovieRenderByTitle";
import MovieRenderByJenre from "../../Components/MovieRenderByJenre";

export default function HomePage() {
   return (
      <Style>
         <Layout>
            <HomePageHero />
            <MovieRenderByTitle title="محبوب" link="movie/popular" />
            <MovieRenderByTitle title="برترین ها" link="movie/top_rated" />
            <MovieRenderByJenre title="ژانر" link="genre/movie/list" />
            <MovieRenderByTitle title="به زودی" link="movie/upcoming" />
         </Layout>
      </Style>
   );
}
