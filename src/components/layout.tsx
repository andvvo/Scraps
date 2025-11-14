import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./common/navbar";

export default function Layout() {
  const location = useLocation();
  const isChildPage = location.pathname !== "/";

  return (
    <div className="flex flex-col h-screen">
      <header className="pt-8">
        {isChildPage && <Link to="/">← Back to Create</Link>}
        <Navbar />
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <footer className="p-4"></footer>
    </div>
  );
}
