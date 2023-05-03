import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orderfood">Order Food</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Nav;
