import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/ingredients">Ingredients</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
