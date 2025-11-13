import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Create</Link>
        </li>
        <li>
          <Link to="/saved-recipes">Saved Recipes</Link>
        </li>
        <li>
          <Link to="/tips">Tips</Link>
        </li>
      </ul>
    </>
  );
}
