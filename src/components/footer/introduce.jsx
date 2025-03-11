import logo from "../../assets/images/logo.jpg";
import "../../styles/main.css";

const Introduce = () => {
  return (
    <>
      <div className="footer-introduce l-4">
        <div className="footer-logo">
          <a className="router-custom" href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="footer-content">
          Tận hưởng trải nghiệm xem phim mới nhất miễn phí ngay tại
          <a className="router-custom" href="/">
            <span className="highlight"> phimmoi </span>
          </a>
          và dành thời gian thư giãn chill cùng gia đình và bạn bè. Với một thư
          viện phim phong phú
        </div>
      </div>
    </>
  );
};

export default Introduce;
