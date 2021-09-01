import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021</h3>
            <p>General Assembly</p>
            <ul>
              <li>
                Successfully completed 500+ hours of expert-led instruction in
                front-end and back-end development, frameworks, databases, APIs
                and hands-on learning of software engineering fundamentals and
                the industry's most in demand technologies
              </li>
              <li>Developed project Liquor-List</li>
              <li>Developed project Bird Flow</li>
              <li>Developed project WOW-GT</li>
              <li>Developed project Pacman</li>
            </ul>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>Nucamp</p>
            <ul>
              <li>
                Completed 6+ months of part-time expert-led instruction in
                front-end, back-end, and mobile development, frameworks,
                databases, and hands-on learning of software engineering
                fundamentals. Used the industry's most in-demand technologies,
                such as: React, React Native, MongoDB, Postgres, NodeJS,
                Bootstrap, AWS, JavaScript, CSS, and HTML.
              </li>
              <li>Developed project Nucampsite</li>
            </ul>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2021</h3>
            <p>BMW</p>
            <ul>
              <li>
                Using industry leading software such as BMW ISTA, BMW ISTA-P and
                ALLDATA, diagnosed software and hardware faults in 600+ vehicles
                and repaired/replaced faulty components in 800+ vehicles
              </li>
              <li>
                Identified and reprogrammed software issues in 300+ BMW
                vehicles.
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2018</h3>
            <p>BMW STEP</p>
            <ul>
              <li>
                Completed training to learn specialized BMW software and
                programs to diagnose electrical and software errors with BMW
                vehicles
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2017</h3>
            <p>Ohio Technical College</p>
            <ul>
              <li>
                Earned Associates of Appled Automotive Science with a 4.0 GPA
              </li>
              <li>Earned a Diploma in Automotive Technology</li>
            </ul>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2011-2015</h3>
            <p>United States Marine Corps.</p>
            <ul>
              <li>Held Secret Security Clearance</li>
              <li>Managed and supervised 13 employees</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
