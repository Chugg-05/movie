import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "../../styles/main.css";
const Logo = () => {
  return (
    <>
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </>
  );
};

export default Logo;
