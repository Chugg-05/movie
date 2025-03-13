import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/main.css";

const Pagination = () => {
  return (
    <>
      <div className="next-page">
        <div className="next-page__list">
          <a className="router-custom" href="/see-more">
            <div className="btn-next_page">
              <FaChevronLeft />
            </div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="btn-next_page">1</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="btn-next_page">2</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="btn-next_page">3</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="btn-next_page">...</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="btn-next_page">99</div>
          </a>
          <a className="router-custom" href="/see-more">
            <div className="btn-next_page">
              <FaChevronRight />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Pagination;
