import { AiFillCaretDown } from "react-icons/ai";
import "../../styles/main.css";
const Menu = () => {
  return (
    <>
      <div className="container-header__content">
        <ul className="header-list row">
          <a className="router-custom" href="/see-more">
            <li className="header-list__items">Phim mới</li>
          </a>
          <a className="router-custom" href="/see-more">
            <li className="header-list__items">Phim lẻ</li>
          </a>
          <a className="router-custom" href="/see-more">
            <li className="header-list__items">Phim bộ</li>
          </a>
          <a className="router-custom" href="/see-more">
            <li className="header-list__items">Phim chiếu rạp</li>
          </a>
          <li className="dropdown">
            <a className="router-custom" href="/see-more">
              <div className="header-list__items">
                Thể loại <AiFillCaretDown />
              </div>
            </a>
            <div className="dropdown-list">
              <div className="row">
                <div>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Âm Nhạc</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Chiến Tranh</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Cổ Trang</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Gia Đình</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Hài Hước</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Hình Sự</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Khoa Học</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Kinh Điển</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Lịch Sử</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Phim bộ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Phim Hài</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Tài liệu</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Thể thao</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">TV Shows</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Võ Thuật</div>
                  </a>
                </div>
                <div className="movieGenre">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Bí Ẩn</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Chính kịch</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Gây Cấn</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Giả Tưởng</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Hành Động</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Học Đường</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Kinh Dị</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Lãng Mạn</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Phiêu Lưu</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Phim Lẻ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Tâm Lý</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Tình Cảm</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Viễn Tưởng</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Phim Đang Chiếu</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Khác</div>
                  </a>
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
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Ấn Độ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Âu Mỹ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Brazil</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Đài Loan</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Đức</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Hàn Quốc</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Indonesia</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Mexico</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Nhật Bản</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Philippines</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Singapore</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Thái Lan</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Thụy Sỹ</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">UEA</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Việt Nam</div>
                  </a>
                </div>
                <div className="nation">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Anh</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Ba Lan</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Hồng Kông</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Malaysia</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Nga</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Pháp</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Tây Ban Nha</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Thụy Điển</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Trung Quốc</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Úc</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Ý</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Khác</div>
                  </a>
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
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2025</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2024</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2023</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2022</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2021</div>
                  </a>
                </div>
                <div className="year">
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2020</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2019</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2018</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">2017</div>
                  </a>
                  <a className="router-custom" href="/see-more">
                    <div className="dropdown-list__items">Trước 2017</div>
                  </a>
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
