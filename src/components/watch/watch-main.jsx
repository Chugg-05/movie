import { FaPlayCircle, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import poster from "../../assets/images/thuc-cam-nhan-gia-poster-watch.webp";
import "../../styles/main.css";

const WatchMain = () => {
  return (
    <>
      <div className="watch-main">
        <Link className="router-custom" to="/">
          <div className="watch-card">
            <label className="watch-overlay"></label>
            <div className="mini-card">
              <img src={poster} alt="poster" />
              <div className="mini-content">
                <h1>Thục cẩm vân gia</h1>
                <p>Brocade Odyssey (2024)</p>
                <Link className="router-custom" to="/">
                  <button className="btn-trailer">
                    <FaYoutube /> Trailer
                  </button>
                </Link>
                <Link className="router-custom" to="/">
                  <button className="btn-watch">
                    <FaPlayCircle /> Xem phim
                  </button>
                </Link>
              </div>
            </div>
            <img src={poster} alt="Thục Cẩm Nhân Gia" className="images" />
            <div className="btn-play_watch"></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WatchMain;
