import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>City: Pooler, Ga</p>
            </div>
            <div className="d-flex">
              <a href="1-603-707-5809">1-603-717-5809</a>
            </div>
            <div className="d-flex">
              <p>Email: aprin418@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link
                  duration={5}
                  smooth={true}
                  to="home"
                  offset={-110}
                  className="footer-nav"
                >
                  Home
                </Link>
                <br />
                <Link
                  duration={5}
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="footer-nav"
                >
                  About Me
                </Link>
                <br />
                <Link
                  duration={5}
                  smooth={true}
                  to="skills"
                  offset={-110}
                  className="footer-nav"
                >
                  Skills
                </Link>
              </div>
              <div className="col">
                <Link
                  duration={5}
                  smooth={true}
                  to="experience"
                  offset={-110}
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
                <Link
                  duration={5}
                  smooth={true}
                  to="projects"
                  offset={-110}
                  className="footer-nav"
                >
                  Projects
                </Link>
                <br />
                <Link
                  duration={5}
                  smooth={true}
                  to="contact"
                  offset={-110}
                  className="footer-nav"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.aaronmprince.com/"}
                quote={"Software Engineer"}
                hashtag="#SoftwareEngineer"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.aaronmprince.com/"}
                quote={"Software Engineer"}
                hashtag="#SoftwareEngineer"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://www.aaronmprince.com/"}
                quote={"Software Engineer"}
                hashtag="#SoftwareEngineer"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://www.aaronmprince.com/"}
                quote={"Software Engineer"}
                hashtag="#SoftwareEngineer"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy; {new Date().getFullYear()}&nbsp;Aaron Prince | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
