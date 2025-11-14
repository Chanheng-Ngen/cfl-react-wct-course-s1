import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-green-500 shadow-md sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 w-full">
        
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="font-bold text-lg text-gray-800 uppercase">CPL Cambodia</span>
        </Link>

      
        <nav className="flex flex-wrap space-x-4 mt-2 md:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/fixtures"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Fixtures
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            News
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
