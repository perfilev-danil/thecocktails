import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import Favorites from "../Favorites/Favorites";

const Header = () => {
  return (
    <div>
      <Search />
      <Navbar />
      <Favorites />
    </div>
  );
};

export default Header;
