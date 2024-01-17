import React from 'react';
import logo from "../images/logo.svg";
import {pageLinks} from '../data';
import {socialLinks} from '../data';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Backroads Logo" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
        {pageLinks.map((link) => {
        console.log(link); // Log the link to the console for debugging
        return (
          <li key={link.id}>
            <a href={link.href} className="nav-link">
              {link.text}
        </a>
      </li>
    );
  })}
</ul>


        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return(
              <li key={link.id}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="nav-icon">
              <i className={link.icon}></i>
            </a>
          </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
