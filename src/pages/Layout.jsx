import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/product">product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Layout;
