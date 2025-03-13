import { FaHouseChimney } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Path = () => {
  return (
    <>
      <div className="path">
        <Link className="router-custom" to="/see-more">
          <span className="highlight">
            <FaHouseChimney /> Phim Mới {`>`} Phim Chiếu Rạp
            {` > `}
          </span>
        </Link>
        <span>Thục Cẩm Vân Gia</span>
      </div>
    </>
  );
};

export default Path;
