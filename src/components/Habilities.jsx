import React from "react";
import Js from "../assets/skills/js.png";
import flask from "../assets/skills/flask.png";
import node from "../assets/skills/nodejs.png";
import next from "../assets/skills/nextjs.png";
import laravel from "../assets/skills/laravel.png";
import github from "../assets/github-32-light.png";
import git from "../assets/skills/git.png";
import php from "../assets/skills/php.png";
import react from "../assets/skills/react.png";
import python from "../assets/skills/python.png";
import vscode from "../assets/skills/vscode.png";
import express from "../assets/skills/express.png";
import Soft_Skills from "./Soft_Skills";
import Lenguajes from "./Lenguajes";

const Habilities = () => {
  return (
    <section id="skills" className="habilidades">
      <article className="container">
        <hr />
        <h1 className="about-title">Habilidades</h1>
        <div className="container mt-5">
          <div className="skills-tec text-center">
            <div className="skills-row row1">
              <img className="skill-img" src={Js} alt="Js" />
              <span className="paragrahp skill-name">JavaScript</span>
              <img className="skill-img" src={flask} alt="Js" />
              <span className="paragrahp skill-name">Flask</span>
              <img className="skill-img" src={node} alt="Js" />
              <span className="paragrahp skill-name">Nodejs</span>
              <img className="skill-img nextjs" src={next} alt="Js" />
              <span className="paragrahp skill-name">NextJs</span>
              <img className="skill-img nextjs" src={express} alt="Js" />
              <span className="paragrahp skill-name">Express</span>
              <img className="skill-img" src={laravel} alt="Js" />
              <span className="paragrahp skill-name">Laravel</span>
            </div>
            <div className="skills-row row2">
              <img className="skill-img" src={git} alt="Js" />
              <span className="paragrahp skill-name">Git</span>
              <img className="skill-img" src={php} alt="Js" />
              <span className="paragrahp skill-name">Php</span>
              <img className="skill-img" src={react} alt="Js" />
              <span className="paragrahp skill-name">Reactjs</span>
              <img className="skill-img" src={python} alt="Js" />
              <span className="paragrahp skill-name">Python</span>
              <img className="skill-img" src={vscode} alt="Js" />
              <span className="paragrahp skill-name">Vscode</span>
              <img className="skill-img" src={github} alt="Js" />
              <span className="paragrahp skill-name">Github</span>
            </div>
          </div>
          <Soft_Skills />
          <Lenguajes />
        </div>
      </article>
    </section>
  );
};

export default Habilities;
