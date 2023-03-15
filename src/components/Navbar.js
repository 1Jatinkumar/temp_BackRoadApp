import React from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentLink="nav-links" childLink="nav-link"/>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} target='_blank' rel="noreferrer" className='nav-icon'>
                  <i className={link.icon_className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div> 
    </nav>
  );
};

export default Navbar;
