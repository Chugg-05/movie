import { FaDatabase, FaShareAlt, FaStar, FaThumbsUp } from "react-icons/fa";
import "../../styles/main.css";

const WatchContent = () => {
  return (
    <>
      <div className="watch-content">
        <div className="episode-list">
          <div className="epsode-title">
            <FaDatabase /> Danh sách tập #Hà Nội (Vietsub)
          </div>
          <div className="epsode-list_items">
            <a className="router-custom" href="/watch">
              <div className="epsode-items">1</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">2</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">3</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">4</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">5</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">6</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">7</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">8</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">9</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">10</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">11</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">12</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">13</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">14</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">15</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">16</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">17</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">18</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">19</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">20</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">21</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">22</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">23</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">24</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">25</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">26</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">27</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">28</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">29</div>
            </a>
            <a className="router-custom" href="/watch">
              <div className="epsode-items">30</div>
            </a>
          </div>
          <hr className="horizontal-lines" />
        </div>

        <div className="like_share">
          <a className="router-custom" href="/watch">
            <button className="btn-like">
              <FaThumbsUp /> Thích <label>0</label>
            </button>
          </a>
          <a className="router-custom" href="/watch">
            <button className="btn-share">
              <FaShareAlt /> Chia sẻ
            </button>
          </a>
        </div>

        <div className="vote">
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <div className="star">
            <FaStar />
          </div>
          <label className="likes">(0 đ/ 0 lượt)</label>
        </div>

        <div className="movie-detail">
          <div className="movie-detail_col">
            <p>
              <label className="lable_movie-detail">Đang phát: </label>
              <span className="red-lines">Tập 30</span>
            </p>
            <p>
              <label className="lable_movie-detail">Quốc gia: </label>
              <span className="gray-lines">Trung Quốc</span>
            </p>
            <p>
              <label className="lable_movie-detail">Chất lượng: </label>
              <span className="quality-quality">Full HD - Vietsub</span>
            </p>
          </div>
          <div className="movie-detail_col">
            <p>
              <label className="lable_movie-detail">Tổng số tập: </label>
              <span className="yellow-lines">Tập 40</span>
            </p>
            <p>
              <label className="lable_movie-detail">Thể loại: </label>
              <span className="gray-lines">Chính kịch, Cổ trang</span>
            </p>
            <p>
              <label className="lable_movie-detail">Thời lượng: </label>
              <span className="gray-lines">43 phút/tập</span>
            </p>
          </div>
          <div className="movie-detail_col">
            <p>
              <label className="lable_movie-detail">Năm phát hành: </label>
              <span className="gray-lines">2024</span>
            </p>
            <p>
              <label className="lable_movie-detail">Đạo diễn: </label>
              <span className="gray-lines">
                {" "}
                Ben Fang, Liu Haibo, Song Yang
              </span>
            </p>
            <p>
              <label className="lable_movie-detail">Diễn viên: </label>
              <span className="gray-lines">
                Chen Xiaoyun, Jing Chao, Tan Songyun, Wang Yinuo, Zhang Haowei,
                Zheng Yecheng
              </span>
            </p>
          </div>
        </div>
        <hr className="horizontal-lines" />
        <div className="title-content">
          Nội dung phim <label>Thục Cẩm Nhân Gia</label>
        </div>
        <p className="gray-lines">
          “Thục Cẩm Nhân Gia” là câu chuyện về lòng dũng cảm, đấu tranh và không
          sợ gian khổ. Nó xoay quanh huyền thoại về Quý Anh Anh với tính cách
          mạnh mẽ, từ một cô gái trẻ ở phường nhuộm Hoán Hoa trở thành một nữ
          thợ thủ công. Vào thời nhà Đường, vẻ đẹp của gấm Thục đã được người
          đời biết đến, giới quyền quý đổ xô theo nó, trong quân đội thậm chí có
          thể “dùng gấm để đổi lấy lương bổng”, tấc gấm tấc vàng. Nó trở thành
          mục tiêu tranh giành lợi ích của tất cả các thế lực. Dưới sự thịnh
          vượng của ngành gấm ở Ích Châu là sóng ngầm dữ dội. Tơ đỏ gấm Thục của
          nhà họ Quý ở Ích Châu vô cùng hiếm có, và nổi danh là “Gấm đỏ xuất
          hiện, ngàn đỏ lu mờ”. Tuy nhiên, nhà họ Quý không may dính líu đến vụ
          án gấm giả, gia chủ chết trong ô nhục, cả gia đình rơi vào cảnh điêu
          tàn chỉ sau một đêm. Tiểu thư nhà họ Quý, Quý Anh Anh, từ nhỏ đã thông
          minh, say mê nhuộm lụa, tài năng dần dần bộc lộ, nàng quyết chí chấn
          hưng gia nghiệp, minh oan cho cha.
        </p>
        <hr className="horizontal-lines" />
        <div className="title-content">Tags</div>
        <div className="tag-list">
          <div className="tag-items">Brocade Odyssey</div>
          <div className="tag-items">Thục Cẩm Vân Gia</div>
        </div>
        <div className="advertisement"></div>
      </div>
    </>
  );
};

export default WatchContent;
