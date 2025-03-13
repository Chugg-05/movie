import Advertisement from "../../components/home/advertisement.jsx";
import MovieList from "../../components/home/movie-list.jsx";
import SingleMovie from "../../components/home/single-movie.jsx";
import Slide from "../../components/home/slide.jsx";
import "../../styles/main.css";

const Home = () => {
  return (
    <>
      <div className="container-minor">
        <div className="container-main">
          <Slide />
          <Advertisement />
          <MovieList />
          <MovieList />
          <MovieList />
          <SingleMovie />
        </div>
      </div>
    </>
  );
};

export default Home;
