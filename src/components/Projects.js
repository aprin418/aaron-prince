import React from "react";
import LLSearch from "../images/LLSearch.png";
import nucampsite from "../images/nucampsite.png";
import wow from "../images/wow.png";
import cardinal from "../images/cardinal.jpg";
import Pacman from "../images/Pacman.png";
import War from "../images/War.png";
import connectUS from "../images/connectUS.png";
import PricingChart from "../images/PricingChart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  const openPopupboxConnectUS = () => {
    const content = (
      <>
        <img
          className="port-img-popup"
          src={connectUS}
          alt="Connect.US search form"
        />
        <p>
          Connect.US allows users to search for living recommendations based on
          certain preferences such as population, temperature and income. Built
          using ReactJSX, NodeJS, Flask and TailwindCSS with a team of 9 UX
          Designers, Software Engineers and Data Scientists.
        </p>
        <b>Deployed link:</b>
        <a
          className="link"
          href="https://connect-us-ga.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://connect-us-ga.herokuapp.com/
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/transcriptive/where-should-we-live"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/transcriptive/where-should-we-live
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Connect.US",
        },
      },
    });
  };

  const popupboxConfigConnectUS = {
    titleBar: {
      enable: true,
      text: "Connect.US",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxLiquorList = () => {
    const content = (
      <>
        <img
          className="port-img-popup"
          src={LLSearch}
          alt="Liquor List search page"
        />
        <p>
          Liquor-list site. Search site designed to search for cocktails based
          on your ingredients lying around the house. Designed with Node,
          Express EJS, SQL, Postgres, Mongoose, JavaScript and CSS. Deployed
          with Heroku
        </p>
        <b>Deployed link:</b>
        <a
          className="link"
          href="https://liquor-list.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://liquor-list.herokuapp.com/
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/aprin418/Liquor-list"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/aprin418/Liquor-list
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Liquor List",
        },
      },
    });
  };

  const popupboxConfigLiquorList = {
    titleBar: {
      enable: true,
      text: "Liquor List",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxNucampsite = () => {
    const content = (
      <>
        <img
          className="port-img-popup"
          src={nucampsite}
          alt="Nucampsite home page"
        />
        <p>
          Mock camping company website. Allows a user to search through
          campsites listed on the site and create/edit comments, or save and
          remove the campsites from the users favorites section. Created with
          React, Redux, MongoDB, Mongoose, express and Node. Deployed with
          Amazon Web Service.
        </p>
        <b>Deployed link:</b>
        <a
          className="link"
          href="http://18.188.110.251/home"
          target="_blank"
          rel="noreferrer"
        >
          http://18.188.110.251/home
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/aprin418/nucampsite-aws"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/aprin418/nucampsite-aws
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Nucampsite",
        },
      },
    });
  };

  const popupboxConfigNucampsite = {
    titleBar: {
      enable: true,
      text: "Nucampsite",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxWowGt = () => {
    const content = (
      <>
        <img className="port-img-popup" src={wow} alt="Wow GT gear page" />
        <p>
          World of Warcraft classic gear tracker, created to allow a user to add
          and display at a glance the gear they want to collect within WOW
          classic. Built with Django, Python, SQL and Materialze. Deployed with
          Heroku
        </p>
        <b>Deployed link:</b>
        <a
          className="link"
          href="https://wow-gt.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://wow-gt.herokuapp.com/
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/aprin418/WOW-GT"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/aprin418/WOW-GT
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "WOW-GT",
        },
      },
    });
  };

  const popupboxConfigWowGt = {
    titleBar: {
      enable: true,
      text: "WOW-GT",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxBirdFlow = () => {
    const content = (
      <>
        <img
          className="port-img-popup"
          src={cardinal}
          alt="Bird Flow home page"
        />
        <p>
          Bird-Flow, group project to search and display birds within a desired
          area. Designed with React, MongoDB, Express, Node, JavaScript and CSS.
          Deployed with Heroku
        </p>
        <b>Deployed link:</b>
        <a
          className="link"
          href="https://bird-flow.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://bird-flow.herokuapp.com/
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/aprin418/bird-flow-frontend"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/aprin418/bird-flow-frontend
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Bird Flow",
        },
      },
    });
  };

  const popupboxConfigBirdFlow = {
    titleBar: {
      enable: true,
      text: "Bird Flow",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxPacman = () => {
    const content = (
      <>
        <img className="port-img-popup" src={Pacman} alt="Pacman gameplay" />
        <p>
          A one for one square by square recreation of level one of Pacman.
          Built with JavaScript, BootStrap, CSS and HTML. Deployed on Github
          pages.
        </p>
        <b>Deployed Link:</b>
        <a
          className="link"
          href="https://aprin418.github.io/JavaScript-Pacman/"
          target="_blank"
          rel="noreferrer"
        >
          https://aprin418.github.io/JavaScript-Pacman/
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/aprin418/JavaScript-Pacman"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/aprin418/JavaScript-Pacman
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Pacman",
        },
      },
    });
  };

  const popupboxConfigPacman = {
    titleBar: {
      enable: true,
      text: "Pacman",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxWar = () => {
    const content = (
      <>
        <img
          className="port-img-popup"
          src={War}
          alt="Liquor List search page"
        />
        <p>
          Recreation of the classic game of war with a standard 52 card deck.
          Built with JavaScript, BootStrap, CSS and HTML. Deployed on Github
          pages.
        </p>
        <b>Deployed link:</b>
        <a
          className="link"
          href="https://aprin418.github.io/war-cards/"
          target="_blank"
          rel="noreferrer"
        >
          https://aprin418.github.io/war-cards/
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/aprin418/war-cards"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/aprin418/war-cards
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "War",
        },
      },
    });
  };

  const popupboxConfigWar = {
    titleBar: {
      enable: true,
      text: "War",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxPricingChart = () => {
    const content = (
      <>
        <img
          className="port-img-popup"
          src={PricingChart}
          alt="Pricing chart"
        />
        <p>
          Responsive pricing chart built for a company interview. Built with
          HTML, CSS, JavaScript and Bootstrap 5.
        </p>
        <b>Deployed link:</b>
        <a
          className="link"
          href="https://aprin418.github.io/kvsocial-assesment/"
          target="_blank"
          rel="noreferrer"
        >
          https://aprin418.github.io/kvsocial-assesment/
        </a>
        <div>
          <b>Github link:</b>
          <a
            className="link"
            href="https://github.com/aprin418/kvsocial-assesment"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/aprin418/kvsocial-assesment
          </a>
        </div>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Pricing Chart",
        },
      },
    });
  };

  const popupboxConfigPricingChart = {
    titleBar: {
      enable: true,
      text: "Pricing Chart",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="projects" className="port-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrappper row row-cols-auto justify-content-center">
          <div className="port-img-box" onClick={openPopupboxConnectUS}>
            <img
              className="port-img"
              src={connectUS}
              alt="Connect.US search form"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>

          <div className="port-img-box" onClick={openPopupboxLiquorList}>
            <img
              className="port-img"
              src={LLSearch}
              alt="Liquor list search results"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>

          <div className="port-img-box" onClick={openPopupboxNucampsite}>
            <img
              className="port-img"
              src={nucampsite}
              alt="Liquor list search results"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>

          <div className="port-img-box" onClick={openPopupboxWowGt}>
            <img
              className="port-img"
              src={wow}
              alt="Liquor list search results"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>

          <div className="port-img-box" onClick={openPopupboxBirdFlow}>
            <img
              className="port-img"
              src={cardinal}
              alt="Liquor list search results"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>

          <div className="port-img-box" onClick={openPopupboxPacman}>
            <img
              className="port-img"
              src={Pacman}
              alt="Liquor list search results"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>

          <div className="port-img-box" onClick={openPopupboxWar}>
            <img
              className="port-img"
              src={War}
              alt="Liquor list search results"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>

          <div className="port-img-box" onClick={openPopupboxPricingChart}>
            <img className="port-img" src={PricingChart} alt="Pricing chart" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="port-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigConnectUS} />
      <PopupboxContainer {...popupboxConfigLiquorList} />
      <PopupboxContainer {...popupboxConfigNucampsite} />
      <PopupboxContainer {...popupboxConfigWowGt} />
      <PopupboxContainer {...popupboxConfigBirdFlow} />
      <PopupboxContainer {...popupboxConfigPacman} />
      <PopupboxContainer {...popupboxConfigWar} />
      <PopupboxContainer {...popupboxConfigPricingChart} />
    </div>
  );
};

export default Projects;
