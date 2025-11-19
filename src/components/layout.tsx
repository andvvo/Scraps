import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./common/navbar";

export default function Layout() {
  const location = useLocation();
  const isChildPage = location.pathname !== "/";

  return (
    <div className="flex flex-col h-screen">
      <header className="mt-8">
        <div className="flex items-center">
          <div className="flex-1">
            {isChildPage && (
              <Link to="/" className="ml-40">
                ← Back to Create
              </Link>
            )}
          </div>
          <Navbar />
          <div className="flex-1"></div>
        </div>
      </header>
      <main className="flex flex-col items-center h-full overflow-auto">
        <Outlet />
      </main>
      <footer className="m-4"></footer>
    </div>
  );
}
