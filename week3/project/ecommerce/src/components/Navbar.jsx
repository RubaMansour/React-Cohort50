import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><button>Products</button> </Link>
      <Link to="/favourites">  <button>Favorites</button></Link>
    </nav>
  );
};

export default Navbar;
