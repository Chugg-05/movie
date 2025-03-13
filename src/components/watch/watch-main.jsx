import { FaPlayCircle, FaYoutube } from "react-icons/fa";
import poster from "../../assets/images/thuc-cam-nhan-gia-poster-watch.webp";
import "../../styles/main.css";
const WatchMain = () => {
  return (
    <>
      <div className="watch-main">
        <div className="router-custom" href="/">
          <div className="watch-card">
            <label className="watch-overlay"></label>
            <div className="mini-card">
              <img src={poster} alt="poster" />
              <div className="mini-content">
                <h1>Thục cẩm vân gia</h1>
                <p>Brocade Odyssey (2024)</p>
                <a className="router-custom" href="/">
                  <button className="btn-trailer">
                    <FaYoutube /> Trailer
                  </button>
                </a>
                <a className="router-custom" href="/">
                  <button className="btn-watch">
                    <FaPlayCircle /> Xem phim
                  </button>
                </a>
              </div>
            </div>
            <img src={poster} alt="Thục Cẩm Nhân Gia" className="images" />
            <div className="btn-play_watch"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchMain;
