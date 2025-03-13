import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "../../styles/main.css";

const Introduce = () => {
  return (
    <>
      <div className="footer-introduce l-4">
        <div className="footer-logo">
          <Link className="router-custom" to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="footer-content">
          Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại
          <Link className="router-custom" to="/">
            <span className="highlight"> phimmoi </span>
          </Link>
          và dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư
          viện phim phong phú
        </div>
      </div>
    </>
  );
};

export default Introduce;
