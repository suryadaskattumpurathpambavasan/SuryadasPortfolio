import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
      My Portfolio
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;