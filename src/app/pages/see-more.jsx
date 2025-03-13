import Filter from "../../components/see-more/filter";
import Introduce from "../../components/see-more/introduce";
import MovieList from "../../components/see-more/movie-list";
import Pagination from "../../components/see-more/pagination";
import "../../styles/main.css";

const SeeMore = () => {
  return (
    <>
      <div className="container-minor">
        <div className="container-main">
          <div className="nav_seemore">
            <h1 className="main-title">Phim chiếu rạp</h1>
            <Filter />
          </div>
          <Introduce />
          <MovieList />
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default SeeMore;
