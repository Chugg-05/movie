import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../styles/main.css";
const Menu = () => {
  return (
    <>
      <div className="container-header__content">
        <ul className="header-list row">
          <Link className="router-custom" to="/see-more">
            <li className="header-list__items">Phim mới</li>
          </Link>
          <Link className="router-custom" to="/see-more">
            <li className="header-list__items">Phim lẻ</li>
          </Link>
          <Link className="router-custom" to="/see-more">
            <li className="header-list__items">Phim bộ</li>
          </Link>
          <Link className="router-custom" to="/see-more">
            <li className="header-list__items">Phim chiếu rạp</li>
          </Link>
          <li className="dropdown">
            <Link className="router-custom" to="/see-more">
              <div className="header-list__items">
                Thể loại <AiFillCaretDown />
              </div>
            </Link>
            <div className="dropdown-list">
              <div className="row">
                <div>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Âm Nhạc</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Chiến Tranh</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Cổ Trang</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Gia Đình</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Hài Hước</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Hình Sự</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Khoa Học</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Kinh Điển</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Lịch Sử</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Phim bộ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Phim Hài</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Tài liệu</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Thể thao</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">TV Shows</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Võ Thuật</div>
                  </Link>
                </div>
                <div className="movieGenre">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Bí Ẩn</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Chính kịch</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Gây Cấn</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Giả Tưởng</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Hành Động</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Học Đường</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Kinh Dị</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Lãng Mạn</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Phiêu Lưu</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Phim Lẻ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Tâm Lý</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Tình Cảm</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Viễn Tưởng</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Phim Đang Chiếu</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Khác</div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <div className="header-list__items">
              Quốc gia <AiFillCaretDown />
            </div>
            <div className="dropdown-list">
              <div className="row">
                <div>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Ấn Độ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Âu Mỹ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Brazil</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Đài Loan</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Đức</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Hàn Quốc</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Indonesia</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Mexico</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Nhật Bản</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Philippines</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Singapore</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Thái Lan</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Thụy Sỹ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">UEA</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Việt Nam</div>
                  </Link>
                </div>
                <div className="nation">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Anh</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Ba Lan</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Hồng Kông</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Malaysia</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Nga</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Pháp</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Tây Ban Nha</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Thụy Điển</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Trung Quốc</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Úc</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Ý</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Khác</div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <div className="header-list__items">
              Năm phát hành <AiFillCaretDown />
            </div>
            <div className="dropdown-list">
              <div className="row">
                <div>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2025</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2024</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2023</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2022</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2021</div>
                  </Link>
                </div>
                <div className="year">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2020</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2019</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2018</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">2017</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-list__items">Trước 2017</div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
