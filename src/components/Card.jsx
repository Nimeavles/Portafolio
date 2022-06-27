import React from "react";
import Github from "../assets/github-32-light.png";

const Card = (props) => {
  return (
    <div className="pro-card mt-5">
      <img className="card-image" src={props.img} alt="img" />
      <div className="pro-description">
        <b className="pro-title">{props.title}</b>
        <p className="paragrahp">{props.description}</p>
      </div>
      <div className="links">
      <a target="about_blank" href={props.link}>
        <button className="links-btn-pro">
          <img src={Github} alt="github" />
          <span className="span-text-pro">Github</span>
        </button>
      </a>
      </div>
    </div>
  );
};

export default Card;
