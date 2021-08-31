import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div className="contact">
      <div className="text-center">
        <h1>Contact Me</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <a
                className="social-link"
                target="blank"
                href="https://github.com/aprin418"
              >
                <FontAwesomeIcon
                  className="social-icon"
                  icon={faGithub}
                  size="3x"
                />
              </a>
              <a
                className="social-link"
                target="blank"
                href="mailto:aprin418@gmail.com"
              >
                <FontAwesomeIcon
                  className="social-icon"
                  icon={faEnvelopeSquare}
                  size="3x"
                />
              </a>
              <a
                className="social-link"
                target="blank"
                href="https://www.linkedin.com/in/aaron-prince-409a1bbb/"
              >
                <FontAwesomeIcon
                  className="social-icon"
                  icon={faLinkedin}
                  size="3x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
