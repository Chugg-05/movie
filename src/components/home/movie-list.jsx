import { FaPlay } from "react-icons/fa";
import poster from "../../assets/images/thuc-cam-nhan-gia-9929-poster.webp";
import "../../styles/main.css";

const MovieList = () => {
  return (
    <>
      <div className="movie-list">
        <div className="main-title_bars">
          <h1 className="main-title">Phim mới cập nhật</h1>
          <a className="router-custom" href="/see-more">
            <button className="btn-detail">
              Xem tất cả <FaPlay />
            </button>
          </a>
        </div>
        <div className="movie-content">
          <div className="movie-list_1">
            <div className="movie-list__main_items">
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
            </div>
            <div className="movie_list__base">
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
            </div>
          </div>
          <div className="movie-list_2">
            <div className="main-movie_content l-12">
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
              <a className="router-custom" href="/watch">
                <div className="movie-card">
                  <div className="card-label">Tập 30 | Vietsub</div>
                  <img src={poster} alt="Thục Cẩm Nhân Gia" className="image" />
                  <div className="play-button"></div>
                  <div className="card-title">Thục Cẩm Nhân Gia</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
