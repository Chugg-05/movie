import {
  AiFillHome,
  AiFillPhone,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles/main.css";
const Outstanding = () => {
  return (
    <>
      <div className="footer-movie l-8">
        <div className="row l-5">
          <div className="footer-new_movie l-6 m-6">
            <Link className="router-custom" to="/see-more">
              <p className="footer-title">Phim mới</p>
            </Link>
            <div className="footer-list">
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim chiếu rạp</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim lẻ</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim bộ</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim hành động</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim viễn tưởng</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim tâm lý</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim hài</div>
              </Link>
            </div>
          </div>
          <div className="footer-good_movie l-6 m-6">
            <p className="footer-title">Phim hay</p>
            <div className="footer-list">
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim Mỹ</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim Hàn Quốc</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim Trung Quốc</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim Thái Lan</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim Việt Nam</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim Ma kinh</div>
              </Link>
              <Link className="router-custom" to="/see-more">
                <div className="footer-list__items">Phim hoạt hình</div>
              </Link>
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
