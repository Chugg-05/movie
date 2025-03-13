import { FaHouseChimney } from "react-icons/fa6";

const Path = () => {
  return (
    <>
      <div className="path">
        <a className="router-custom" href="/see-more">
          <span className="highlight">
            <FaHouseChimney /> Phim Mới {`>`} Phim Chiếu Rạp
            {` > `}
          </span>
        </a>
        <span>Thục Cẩm Vân Gia</span>
      </div>
    </>
  );
};

export default Path;
