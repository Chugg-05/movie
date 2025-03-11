import MenuRespon from "../../components/header/menu-respon.jsx";
import Menu from "../../components/header/menu.jsx";
import Logo from "../../components/header/page-logo.jsx";
import SearchBar from "../../components/header/search-bar.jsx";
import "../../styles/main.css";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="container-header">
          <div className="row">
            <Logo />
            <Menu />
          </div>
          <SearchBar />
          <MenuRespon />
        </div>
      </div>
    </>
  );
};

export default Header;
