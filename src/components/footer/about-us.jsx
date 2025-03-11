import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTikTok,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import "../../styles/main.css";
const AboutUs = () => {
  return (
    <>
      <div className="footer-about_us row">
        <div className="l-1">
          <a className="router-custom" href="/">
            <AiFillFacebook />
          </a>
        </div>
        <div className="l-1">
          <a className="router-custom" href="/">
            <AiFillInstagram />
          </a>
        </div>
        <div className="l-1">
          <a className="router-custom" href="/">
            <AiFillYoutube />
          </a>
        </div>
        <div className="l-1">
          <a className="router-custom" href="/">
            <AiFillTikTok />
          </a>
        </div>
        <div className="l-1">
          <a className="router-custom" href="/">
            <AiFillTwitterCircle />
          </a>
        </div>
        <div className="l-1">
          <a className="router-custom" href="/">
            <FaTelegram />
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
