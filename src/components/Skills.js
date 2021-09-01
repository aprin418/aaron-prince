import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="py-5">My Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
              </div>
              <h3>Front End</h3>
              <ul class="no-bullets">
                <li>JavaScript</li>
                <li>React</li>
                <li>React-Native</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
                <li>EJS</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faPython} size="2x" />
              </div>
              <h3>Back End</h3>
              <ul class="no-bullets">
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Django</li>
                <li>Python</li>
                <li>NodeJS</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
              </div>
              <h3>Other</h3>
              <ul class="no-bullets">
                <li>Github</li>
                <li>Git</li>
                <li>Slack</li>
                <li>LucidChart</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
