import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        HOME
      </NavLink>
    </header>
  );
}
