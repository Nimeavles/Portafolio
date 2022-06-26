import React from "react";
import personalImg from "../assets/foto-personal.jpg";

const About_Me = () => {
  return (
    <section className="about-me" id="about_me">
      <article className="container">
        <hr />
        <h1 className="about-title mb-5">Un poco sobre mí</h1>
        <div className="info justify-content-around">
          <div className="d-flex align-items-center">
            <img className="personal-img" src={personalImg} alt="img" />
          </div>
          <div className="d-flex flex-column texts">
            <p className="paragrahp">
              <big className="hello">Soy Pablo Rodríguez</big> y tengo 15 años,
              soy FullStack Developer, aunque mi punto fuerte ahora mismo es el
              frontend. Soy una persona activa, con ganas de aprender, y
              emprendedora. Manejo el inglés como segundo idioma, además de
              tener un B2 con certificación en cambridge.
            </p>
            <p className="paragrahp">
              Lo que he aprendido, ha sido todo por mi cuenta, lo que me ha
              facilitado el desarrollo del aprendizaje de manera autodidacta.
              Esto conlleva a que puedo aprender cualquier tecnología/lenguaje
              solo con su documentación.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About_Me;
