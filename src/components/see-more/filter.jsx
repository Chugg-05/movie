import "../../styles/main.css";
const Filter = () => {
  return (
    <>
      <div className="filter-group">
        <div className="filter-group_list-1">
          <select className="filter" name="filter-movie" id="filter_movie">
            <option value="Danh mục">Danh mục</option>
            <option value="Phim lẻ">Phim lẻ</option>
            <option value="Hoạt hình">Hoạt hình</option>
            <option value="Phim bộ">Phim bộ</option>
            <option value="Phim rạp">Phim rạp</option>
            <option value="TV shows">TV shows</option>
          </select>
          <select
            className="filter"
            name="filter-movie_genre"
            id="filter-movie_genre"
          >
            <option value="Thể loại">Thể loại</option>
            <option value="Âm nhạc">Âm nhạc</option>
            <option value="Bí ẩn">Bí ẩn</option>
            <option value="Chiến tranh">Chiến tranh</option>
            <option value="Chính kịch">Chính kịch</option>
            <option value="Cổ trang">Cổ trang</option>
            <option value="Gia đình">Gia đình</option>
            <option value="Giả tưởng">Giả tưởng</option>
            <option value="Hài hước">Hài hước</option>
            <option value="Hành động">Hành động</option>
            <option value="Hình sự">Hình sự</option>
            <option value="Học đường">Học đường</option>
            <option value="Khoa học">Khoa học</option>
            <option value="Kinh dị">Kinh dị</option>
            <option value="Kinh điển">Kinh điển</option>
            <option value="Lịch sử">Lịch sử</option>
            <option value="Miển tây">Miển tây</option>
            <option value="Phiêu lưu">Phiêu lưu</option>
            <option value="Phim 18">Phim 18+</option>
            <option value="Tài liệu">Tài liệu</option>
            <option value="Tâm lí">Tâm lí</option>
            <option value="Thần thoại">Thần thoại</option>
            <option value="Thể thao">Thể thao</option>
            <option value="Tình cảm">Tình cảm</option>
            <option value="Trẻ em">Trẻ em</option>
            <option value="Viễn tưởng">Viễn tưởng</option>
            <option value="Võ thuật">Võ thuật</option>
          </select>
        </div>
        <div className="filter-group_list-2">
          <select className="filter" name="filter-nation" id="filter-nation">
            <option value="Quốc gia">Quốc gia</option>
            <option value="Việt Nam">Việt Nam</option>
            <option value="Hàn Quốc">Hàn Quốc</option>
            <option value="Nhật Bản">Nhật Bản</option>
            <option value="Anh</">Anh</option>
            <option value="Ấn độ">Ấn độ</option>
            <option value="Trung Quốc">Trung Quốc</option>
            <option value="Thái lan">Thái lan</option>
            <option value="Âu Mỹ">Âu Mỹ</option>
            <option value="Brazil</">Brazil</option>
            <option value="Áo</">Áo</option>
            <option value="Ý</">Ý</option>
            <option value="Tây Ban">Tây Ban Nha</option>
            <option value="Canada</">Canada</option>
            <option value="Châu phi">Châu phi</option>
            <option value="Đài loan">Đài loan</option>
            <option value="Pháp</">Pháp</option>
            <option value="Thụy Điển">Thụy Điển</option>
            <option value="Úc</">Úc</option>
            <option value="Đức</">Đức</option>
            <option value="Hà Lan">Hà Lan</option>
            <option value="Nga</">Nga</option>
            <option value="Khác</">Khác</option>
          </select>
          <select className="filter" name="filter-year" id="filter-year">
            <option value="Năm phát hành">Năm phát hành</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="Trước 2016">Trước 2016</option>
          </select>
        </div>
        <button className="btn-filter">Tìm kiếm</button>
      </div>
    </>
  );
};

export default Filter;
