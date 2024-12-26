import { Link, useLocation, NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="side-bar">
      <NavLink
        activeClassName="active"
        to="/Dashboard/Users"
        className={`item-link `}
      >
        Users
        <i
          className="fa-solid fa-users fa-sm"
          style={{ marginLeft: "6px" }}
        ></i>
      </NavLink>
      <NavLink
        activeClassName="active"
        to="/Dashboard/User/create"
        className={`item-link `}
      >
        Create User
        <i
          className="fa-solid fa-user-plus fa-sm"
          style={{ marginLeft: "6px" }}
        ></i>
      </NavLink>
    </div>
  );
}
