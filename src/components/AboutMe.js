import React from "react";
import author from "../Profile.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author photo" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            I am a software engineer with a history of problem solving, teamwork
            and leadership. I value independence, responsibility and success. I
            have a history of working well with anyone from the military and a
            proven record of finding and fixing problems while working as an
            automotive technician with BMW.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
