import "../../components/footer/about-us";
import AboutUs from "../../components/footer/about-us.jsx";
import Copyright from "../../components/footer/copyright.jsx";
import Introduce from "../../components/footer/introduce.jsx";
import "../../components/footer/outstanding";
import Outstanding from "../../components/footer/outstanding.jsx";
import "../../styles/main.css";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="container-footer">
          <div className="footer-category">
            <Introduce />
            <Outstanding />
          </div>
          <AboutUs />
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default Footer;
