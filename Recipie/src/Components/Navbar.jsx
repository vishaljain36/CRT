
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-icon">🍲</span>
        RecipeBook
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div
        id="main-navigation"
        className={`nav-links ${menuOpen ? "open" : ""}`}
      >
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/add-recipe" onClick={closeMenu}>
          + Add Recipe
        </NavLink>

        <NavLink to="/favorites" onClick={closeMenu}>
          ♥ Favorites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;