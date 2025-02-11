import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Products</Link>
      <Link to="/favourites">Favorites</Link>
    </nav>
  );
};

export default Navbar;
