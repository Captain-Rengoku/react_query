import { NavLink } from "react-router";

const Navbar = () => {
  // Base styles applied to every link — padding, rounded corners, smooth transitions, and hover effect
  const linkBase =
    "px-3 py-2 rounded-lg transition-all text-center duration-200 hover:bg-indigo-600 hover:text-white shadow-xs shadow-indigo-400";

  // Additional styles applied only when a link is active
  const activeLink =
    "bg-indigo-600 text-white";

  return (
    // Navbar container with background, padding, and responsive layout
    <nav className="bg-slate-800 p-4 flex justify-center sm:justify-between items-center flex-wrap text-indigo-200 rounded-b-lg">
      
      {/* NavLink automatically applies an "active" state when its route matches the current URL */}
      <NavLink
        to="/"
        // className can take a function that receives { isActive } from React Router
        // If isActive is true, apply activeLink styling in addition to base styles
        className={({ isActive }) =>
          `w-full sm:w-fit px-8 ${linkBase} ${isActive ? activeLink : ""}`
        }
      >
        Home
      </NavLink>

      {/* Grid container for other navigation links — adjusts layout responsively */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-3 sm:mt-0">
        
        {/* Each NavLink dynamically applies the active class when on the matching route */}
        <NavLink
          to="/traditional-posts"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Traditional Posts
        </NavLink>

        <NavLink
          to="/react-query-posts"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          React Query Posts
        </NavLink>

        <NavLink
          to="/paginated-fruits"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Paginated Fruits
        </NavLink>

        <NavLink
          to="/infinite-fruits"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Infinite Fruits
        </NavLink>

        <NavLink
          to="/infinite-fruits-auto"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Infinite Fruits Auto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
