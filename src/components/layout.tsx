import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./common/navbar";

export default function Layout() {
  const location = useLocation();
  const isChildPage = location.pathname !== "/";

  return (
    <div>
      <header>
        {isChildPage && <Link to="/">← Back to Create</Link>}
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
