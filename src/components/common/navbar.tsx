import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul className="flex justify-center gap-12 lg:text-xl">
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
      </ul>
    </>
  );
}
