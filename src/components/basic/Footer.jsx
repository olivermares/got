import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
    <h2>Footer</h2>
    <div className="footer-link">
        <NavLink
          to="/houses"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          CASAS
        </NavLink>

        <NavLink
          to="/characters"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          PERSONAJES
        </NavLink>

        <NavLink
          to="/chronology"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          CRONOLOGIA
        </NavLink>
      </div>
    </footer>
  );
}
