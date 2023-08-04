import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>HEADER</h1>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        HOME
      </NavLink>
    </header>
  );
}
