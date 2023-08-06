import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer margin-top margin-bottom">
      <div className="footer-div">
        <NavLink
          to="/characters"
          className={({ isActive }) => (isActive ? "u-active" : "")}
        >
          <h2 className="e-h2">PERSONAJES</h2>
        </NavLink>
        <NavLink
          to="/houses"
          className={({ isActive }) => (isActive ? "u-active" : "")}
        >
          <h2 className="e-h2">CASAS</h2>
        </NavLink>

        <NavLink
          to="/chronology"
          className={({ isActive }) => (isActive ? "u-active" : "")}
        >
          <h2 className="e-h2">CRONOLOGIA</h2>
        </NavLink>
      </div>
    </footer>
  );
}
