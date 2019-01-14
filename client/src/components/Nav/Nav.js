import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  color: '#fff'
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/" style={navStyle} className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Home
        </Link>
        <Link to="/users" style={navStyle} className={window.location.pathname === "/users" ? "nav-link active" : "nav-link"}>
        Users
        </Link>
        <Link to="/tasks" style={navStyle} className={window.location.pathname === "/tasks" ? "nav-link active" : "nav-link"}>
        Tasks
        </Link>
        <Link to="/comments" style={navStyle} className={window.location.pathname === "/comments" ? "nav-link active" : "nav-link"}>
        Comments
        </Link>
    </nav>
  );
}

export default Nav;
