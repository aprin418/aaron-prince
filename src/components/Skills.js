import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="py-5">My Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <h3>Front End</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <h3>Back End</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="box">
              <h3>Other</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
