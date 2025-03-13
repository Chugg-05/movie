import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTikTok,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../../styles/main.css";
const AboutUs = () => {
  return (
    <>
      <div className="footer-about_us row">
        <div className="l-1">
          <Link className="router-custom" to="/">
            <AiFillFacebook />
          </Link>
        </div>
        <div className="l-1">
          <Link className="router-custom" to="/">
            <AiFillInstagram />
          </Link>
        </div>
        <div className="l-1">
          <Link className="router-custom" to="/">
            <AiFillYoutube />
          </Link>
        </div>
        <div className="l-1">
          <Link className="router-custom" to="/">
            <AiFillTikTok />
          </Link>
        </div>
        <div className="l-1">
          <Link className="router-custom" to="/">
            <AiFillTwitterCircle />
          </Link>
        </div>
        <div className="l-1">
          <Link className="router-custom" to="/watch">
            <FaTelegram />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
