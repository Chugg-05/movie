import logo from "../../assets/images/logo.jpg";
import "../../styles/main.css";
const Logo = () => {
  return (
    <>
      <div className="header-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
    </>
  );
};

export default Logo;
