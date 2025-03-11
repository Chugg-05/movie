import { FaSearch } from "react-icons/fa";
import "../../styles/main.css";
const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <form className="row" role="search">
          <input
            type="search"
            className="form-search"
            placeholder="Tìm kiếm phim..."
          />
          <button className="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
