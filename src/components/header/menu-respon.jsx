import { AiFillCaretDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <label htmlFor="header-menu_input" className="close_menu">
            <AiOutlineClose />
          </label>
        </div>
        <div className="header-mobile-list">
          <a className="router-custom" href="/see-more">
            <div className="header-mobile-list__items">Phim mới</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="header-mobile-list__items">Phim lẻ</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="header-mobile-list__items">Phim bộ</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="header-mobile-list__items">Phim chiếu rạp</div>
          </a>
          <div className="dropdown-mobile">
            <a className="router-custom" href="/see-more">
              <div className="header-mobile-list__items">
                Thể loại <AiFillCaretDown />
              </div>
            </a>
            <div className="dropdown-mobile-list">
              <div className="row">
                <div className="l-4">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Âm Nhạc</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Chiến Tranh
                    </div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Cổ Trang</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Gia Đình</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Hài Hước</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Hình Sự</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Khoa Học</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Kinh Điển</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Phim Lẻ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Tâm Lý</div>
                  </a>
                </div>
                <div className="l-4">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Lịch Sử</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Phim bộ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Phim Hài</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Tài liệu</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Thể thao</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">TV Shows</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Võ Thuật</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Bí Ẩn</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Tình Cảm</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Viễn Tưởng
                    </div>
                  </a>
                </div>
                <div className="l-4">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Chính kịch
                    </div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Gây Cấn</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Giả Tưởng</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Hành Động</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Học Đường</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Kinh Dị</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Lãng Mạn</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Phiêu Lưu</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Phim Đang Chiếu
                    </div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Khác</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <li className="dropdown-mobile">
            <a className="router-custom" href="/see-more">
              <div className="header-mobile-list__items">
                Quốc gia <AiFillCaretDown />
              </div>
            </a>
            <div className="dropdown-mobile-list l-12">
              <div className="row">
                <div className="l-4">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Ấn Độ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Âu Mỹ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Brazil</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Đài Loan</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Đức</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Hàn Quốc</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Indonesia</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Tây Ban Nha
                    </div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Thụy Điển</div>
                  </a>
                </div>
                <div className="l-4">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Mexico</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Nhật Bản</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Philippines
                    </div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Singapore</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Thái Lan</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Thụy Sỹ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">UEA</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Trung Quốc
                    </div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Úc</div>
                  </a>
                </div>
                <div className="l-4">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Việt Nam</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Anh</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Ba Lan</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Hồng Kông</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Malaysia</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Nga</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Pháp</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Ý</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">Khác</div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown-mobile">
            <a className="router-custom" href="/see-more">
              <div className="header-mobile-list__items">
                Năm phát hành <AiFillCaretDown />
              </div>
            </a>
            <div className="dropdown-mobile-list">
              <div className="row l-12">
                <div className="l-6">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2025</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2024</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2023</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2022</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2021</div>
                  </a>
                </div>
                <div className="year l-6">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2020</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2019</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2018</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">2017</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-mobile-list__items">
                      Trước 2017
                    </div>
                  </a>
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
