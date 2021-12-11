import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h3>Lana App</h3>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/trailer">Trailer</Link>
      </div>
    </nav>
  );
}

export default NavBar;
