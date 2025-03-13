import "../../styles/main.css";

const Introduce = () => {
  return (
    <>
      <div className="seemore-introduce">
        <div className="path">
          <a className="router-custom" href="/">
            <span className="highlight">
              <i className="fa-solid fa-house-chimney"></i> Phim Mới {`>`}
            </span>
          </a>
          <span> Phim chiếu rạp</span>
        </div>
        <div className="page-content">
          Khám phá danh sách
          <a className="router-custom" href="/see-more">
            <span className="highlight">Phim Chiếu Rạp</span>
          </a>
          mới và hot nhất, được cập nhật thường xuyên trên phimmoichill net.
          Thưởng thức và tải về hơn 100.000+ bộ phim bộ Vietsub, thuyết minh
          đang nổi bật và được yêu thích nhất tháng 1 năm 2025.
        </div>
      </div>
    </>
  );
};

export default Introduce;
