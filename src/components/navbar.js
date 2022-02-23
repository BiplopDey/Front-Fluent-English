import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className="nav-link active" aria-current="page">
              <Link to="/">Home</Link>
            </button>
            <button className="nav-link">
              <Link to="/favorites">Favorites</Link>
            </button>
            <button className="nav-link">
              <Link to="/videos">Videos</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
