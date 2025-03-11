import Advertisement from "../../components/home/advertisement.jsx";
import MovieList from "../../components/home/movie-list.jsx";
import SingleMovie from "../../components/home/single-movie.jsx";
import Slide from "../../components/home/slide.jsx";
import "../../styles/main.css";
import Footer from "../layouts/footer.jsx";
import Header from "../layouts/header.jsx";

const Home = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Home;
