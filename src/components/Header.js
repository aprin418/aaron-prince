import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Aaron Prince, Software Engineer</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Development",
            "Software Engineering",
            "JavaScript",
            "React",
            "Python",
            "Django",
            "MongoDB",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="contact"
          offset={-110}
          href="#"
          className="btn-main-offer"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
