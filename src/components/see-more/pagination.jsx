import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/main.css";

const Pagination = () => {
  return (
    <>
      <div className="next-page">
        <div className="next-page__list">
          <Link className="router-custom" to="/see-more">
            <div className="btn-next_page">
              <FaChevronLeft />
            </div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="btn-next_page">1</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="btn-next_page">2</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="btn-next_page">3</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="btn-next_page">...</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="btn-next_page">99</div>
          </Link>
          <Link className="router-custom" to="/see-more">
            <div className="btn-next_page">
              <FaChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pagination;
