import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import poster from "../../assets/images/thuc-cam-nhan-gia-9929-poster.webp";
import "../../service/slide.js";
import "../../styles/main.css";

const Slide = () => {
  return (
    <>
      <h1 className="main-title">Phim đề cử</h1>
      <div className="slide-recommendFilm">
        <div className="recommendFilm-list">
          <div className="recommendFilm-list__items">
            <Link className="router-custom" to="/watch">
              <div className="movie-card">
                <div className="card-label">Tập 30 | Vietsub</div>
                <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                <div className="play-button"></div>
                <div className="card-title">Thục Cẩm Nhân Gia</div>
              </div>
            </Link>
          </div>
          <div className="recommendFilm-list__items">
            <Link className="router-custom" to="/watch">
              <div className="movie-card">
                <div className="card-label">Tập 30 | Vietsub</div>
                <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                <div className="play-button"></div>
                <div className="card-title">Thục Cẩm Nhân Gia</div>
              </div>
            </Link>
          </div>
          <div className="recommendFilm-list__items">
            <Link className="router-custom" to="/watch">
              <div className="movie-card">
                <div className="card-label">Tập 30 | Vietsub</div>
                <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                <div className="play-button"></div>
                <div className="card-title">Thục Cẩm Nhân Gia</div>
              </div>
            </Link>
          </div>
          <div className="recommendFilm-list__items">
            <Link className="router-custom" to="/watch">
              <div className="movie-card">
                <div className="card-label">Tập 30 | Vietsub</div>
                <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                <div className="play-button"></div>
                <div className="card-title">Thục Cẩm Nhân Gia</div>
              </div>
            </Link>
          </div>
          <div className="recommendFilm-list__items">
            <Link className="router-custom" to="/watch">
              <div className="movie-card">
                <div className="card-label">Tập 30 | Vietsub</div>
                <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                <div className="play-button"></div>
                <div className="card-title">Thục Cẩm Nhân Gia</div>
              </div>
            </Link>
          </div>
          <div className="controls">
            <label className="prev">
              <FaChevronLeft />
            </label>
            <label className="next">
              <FaChevronRight />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
