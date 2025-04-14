import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className="text-white" activeClassName="text-yellow-500">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white" activeClassName="text-yellow-500">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="text-white" activeClassName="text-yellow-500">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white" activeClassName="text-yellow-500">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;