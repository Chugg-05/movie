import { FaFacebook } from "react-icons/fa";
import avt from "../../assets/images/fb_avt.jpg";
import "../../styles/main.css";
const MainComment = () => {
  return (
    <>
      <div className="main-comment">
        <div className="main-comment_content">
          <div className="h_comment">
            <div className="count_comment">
              <label>0 bình luận</label>
            </div>
            <div className="filter_comment">
              <label htmlFor="select_comment">Sắp xếp theo </label>
              <select
                name="select_comment"
                id="select_comment"
                className="select_comment"
              >
                <option className="select_comment_items" value="0">
                  Cũ nhất
                </option>
                <option className="select_comment_items" value="1">
                  Mới nhất
                </option>
              </select>
            </div>
          </div>
          <hr className="horizontal-lines" />
          <div className="m-comment">
            <img className="avt_fb" src={avt} alt="avatar fakebook" />
            <form className="form-cmt">
              <textarea
                className="txa_cmt"
                placeholder="Bình luận..."
              ></textarea>
              <button className="btn-upload_cmt" type="submit">
                Bình luận
              </button>
            </form>
          </div>
          <hr className="horizontal-lines" />
          <div className="f-comment">
            <div className="f-comment_content">
              <FaFacebook /> Plugin bình luận trên facebook
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComment;
