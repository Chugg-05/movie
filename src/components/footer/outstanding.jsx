import {
  AiFillHome,
  AiFillPhone,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import "../../styles/main.css";
const Outstanding = () => {
  return (
    <>
      <div className="footer-movie l-8">
        <div className="row l-5">
          <div className="footer-new_movie l-6 m-6">
            <a className="router-custom" href="/see-more">
              <p className="footer-title">Phim mới</p>
            </a>
            <div className="footer-list">
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim chiếu rạp</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim lẻ</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim bộ</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim hành động</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim viễn tưởng</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim tâm lý</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim hài</div>
              </a>
            </div>
          </div>
          <div className="footer-good_movie l-6 m-6">
            <p className="footer-title">Phim hay</p>
            <div className="footer-list">
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim Mỹ</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim Hàn Quốc</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim Trung Quốc</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim Thái Lan</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim Việt Nam</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim Ma kinh</div>
              </a>
              <a className="router-custom" href="/see-more">
                <div className="footer-list__items">Phim hoạt hình</div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-contact l-7">
          <p className="footer-title">Liên hệ & Hỗ trợ</p>
          <div className="footer-contact__content">
            <AiFillHome /> <span>Cầu Giấy, Hà Nội, Việt Nam</span>
          </div>
          <div className="footer-contact__content">
            <AiOutlineMail /> <span>chillwithmovie8386@gmail.com</span>
          </div>
          <div className="footer-contact__content">
            <AiOutlinePhone />
            <span>+84 123 456 789</span>
          </div>
          <div className="footer-contact__content">
            <AiFillPhone /> <span>+84 123 456 789</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Outstanding;
