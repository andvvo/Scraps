import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./common/navbar";

export default function Layout() {
  const location = useLocation();
  const isChildPage = location.pathname !== "/";

  return (
    <div className="">
      <header className="p-6">
        {isChildPage && <Link to="/">← Back to Create</Link>}
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="p-6"></footer>
    </div>
  );
}
