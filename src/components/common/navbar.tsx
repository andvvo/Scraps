import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="flex justify-center gap-12">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved-recipes"
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            Saved Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tips"
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            Tips
          </NavLink>
        </li>
      </ul>
    </>
  );
}
