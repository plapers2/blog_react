import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navbar bg-transparent shadow-sm md:col-span-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/creararticulo">Crear Articulo</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="badge py-5 px-0 text-sm md:text-md lg:text-xl mx-2">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="badge py-5 px-0 text-sm md:text-md lg:text-xl mx-2">
              <NavLink to="/creararticulo">Crear Articulo</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
