import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="home">
          Aaron Prince
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                duration={5}
                smooth={true}
                to="home"
                className="nav-link homeLink"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={5}
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link aboutLink"
                aria-current="page"
                href="#"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={5}
                smooth={true}
                to="skills"
                offset={-110}
                className="nav-link skillsLink"
                href="#"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={5}
                smooth={true}
                to="projects"
                offset={-110}
                className="nav-link projectsLink"
                href="#"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={5}
                smooth={true}
                to="experience"
                offset={-110}
                className="nav-link experienceLink"
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                duration={5}
                smooth={true}
                to="contact"
                offset={-110}
                className="nav-link contactLink"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
