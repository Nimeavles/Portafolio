import React from "react";
import img from '../assets/foto-personal.jpg'
import Card from "./Card";

const Proyectos = () => {

  const proyects = [
    {
      title: 'Contacts App',
      description: 'Una app de contactos hecha en nodejs con express y mysql. Donde cada usario tiene sus contactos',
      link: 'https://github.com/Nimeavles/Contacts-App',
      image: img
    },
    {
      title: 'Resume Creator',
      description: 'Una applicacion web para crear curriculums de trabajo hecha con Laravel y Vue.js',
      link: 'https://github.com/Nimeavles/Resume-creator',
      image: img
    },
    {
      title: 'PortFolio',
      description: 'PortFolio personal, hecho en ReactJs con deploy en vercel, contruido sobre Vite.js',
      link: 'https://github.com/Nimeavles/Portafolio',
      image: img
    },
    {
      title: 'Ejercicios ReactJs',
      description: 'Apps de react de diferente dificultad para aprender react',
      link: 'https://github.com/Nimeavles/Ejercicios-ReactJs',
      image: img
    }
  ]

  return (
    <section className="proyectos">
      <article className="container">
        <hr />
        <h1 className="about-title">Proyectos</h1>
        <div className="container proyects">
          {
            proyects.map((proyect, index) => {
              return <Card img={proyect.image} title={proyect.title} description={proyect.description} link={proyect.link} key={index} />
            })
          }
        </div>
      </article>
    </section>
  );
};

export default Proyectos;
