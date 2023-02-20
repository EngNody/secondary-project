// import React from 'react';
import * as React from "react";
import { NavLink,Link } from "react-router-dom";


let Header = () => {

  return (
    <>
  <div id="mySidenav" className="sidenav">
  <Link to="/" id="Home" className="main-list">
  Home Bage
  </Link>
  <NavLink to="/Allbrojects.js" id="allprojects" className="main-list">
  all projects
  </NavLink>
  <NavLink to="/blog.js" id="blog" className="main-list">
  My Blog
  </NavLink>
  <NavLink to="/tasks.js" id="tasks" className="main-list">
  My tasks
  </NavLink>
  <NavLink to="/contactus.js" id="contact" className="main-list">
  My Contact
  </NavLink>
</div>
    </>
  );
}


export default Header;
