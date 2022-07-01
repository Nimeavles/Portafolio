import React from "react";
import Github from "../assets/github-32-light.png";
import Linkedin from "../assets/linkedin.png";

const Home = () => {
  return (
    <section className="home">
      <article className="container mt-5">
        <h1 className="home-title mt-5">Pablo Rodríguez</h1>
        <h3 className="home-skill mt-5">FullStack Developer</h3>
        <div className="links mt-5 mb-5">
          <a target="about_blank" href="https://github.com/Nimeavles">
            <button className="links-btn">
              <img src={Github} alt="github" />
              <span className="span-text">Github</span>
            </button>
          </a>
          <a target="about_blank" href="https://www.linkedin.com/in/pablo-rodriguez-2042a2242/">
            <button className="links-btn btn-link">
              <img src={Linkedin} alt="linkedin" />
              <span className="span-text">LinkdIn</span>
            </button>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;
