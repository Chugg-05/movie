import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "../../styles/main.css";

const MenuRespon = () => {
  return (
    <>
      <label htmlFor="header-menu_input" className="header-menu">
        <AiOutlineMenu />
      </label>
      <input
        type="checkbox"
        className="header-menu_input"
        id="header-menu_input"
      />
      <label htmlFor="header-menu_input" className="header-overlay"></label>
      <div className="header-mobile__content">
        <div className="row">
          <div className="header-mobile-logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <label htmlFor="header-menu_input" className="close_menu">
            <AiOutlineClose />
          </label>
        </div>
        <div className="header-mobile-list">
          <Link className="router-custom" to="/see-more">
            <div className="header-mobile-list__items">Phim mới</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="header-mobile-list__items">Phim lẻ</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="header-mobile-list__items">Phim bộ</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="header-mobile-list__items">Phim chiếu rạp</div>
          </Link>
          <div className="dropdown-mobile">
            <Link className="router-custom" to="/see-more">
              <div className="header-mobile-list__items">
                Thể loại <AiFillCaretDown />
              </div>
            </Link>
            <div className="dropdown-mobile-list">
              <div className="row">
                <div className="l-4">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Âm Nhạc</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Chiến Tranh
                    </div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Cổ Trang</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Gia Đình</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Hài Hước</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Hình Sự</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Khoa Học</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Kinh Điển</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Phim Lẻ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Tâm Lý</div>
                  </Link>
                </div>
                <div className="l-4">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Lịch Sử</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Phim bộ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Phim Hài</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Tài liệu</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Thể thao</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">TV Shows</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Võ Thuật</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Bí Ẩn</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Tình Cảm</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Viễn Tưởng
                    </div>
                  </Link>
                </div>
                <div className="l-4">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Chính kịch
                    </div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Gây Cấn</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Giả Tưởng</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Hành Động</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Học Đường</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Kinh Dị</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Lãng Mạn</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Phiêu Lưu</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Phim Đang Chiếu
                    </div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Khác</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <li className="dropdown-mobile">
            <Link className="router-custom" to="/see-more">
              <div className="header-mobile-list__items">
                Quốc gia <AiFillCaretDown />
              </div>
            </Link>
            <div className="dropdown-mobile-list l-12">
              <div className="row">
                <div className="l-4">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Ấn Độ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Âu Mỹ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Brazil</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Đài Loan</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Đức</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Hàn Quốc</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Indonesia</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Tây Ban Nha
                    </div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Thụy Điển</div>
                  </Link>
                </div>
                <div className="l-4">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Mexico</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Nhật Bản</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Philippines
                    </div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Singapore</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Thái Lan</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Thụy Sỹ</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">UEA</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Trung Quốc
                    </div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Úc</div>
                  </Link>
                </div>
                <div className="l-4">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Việt Nam</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Anh</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Ba Lan</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Hồng Kông</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Malaysia</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Nga</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Pháp</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Ý</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">Khác</div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-mobile">
            <Link className="router-custom" to="/see-more">
              <div className="header-mobile-list__items">
                Năm phát hành <AiFillCaretDown />
              </div>
            </Link>
            <div className="dropdown-mobile-list">
              <div className="row l-12">
                <div className="l-6">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2025</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2024</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2023</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2022</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2021</div>
                  </Link>
                </div>
                <div className="year l-6">
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2020</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2019</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2018</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">2017</div>
                  </Link>
                  <Link className="router-custom" to="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Trước 2017
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </>
  );
};

export default MenuRespon;
