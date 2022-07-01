import React from "react";
import ig from "../assets/ig.png";
import tw from "../assets/tw.png";
import gm from "../assets/gmail.png";
import Location from "./location";

const Contact = () => {
  return (
    <section id="contact" className="contact-me">
      <article className="container ">
        <hr />
        <h1 className="about-title">¿Cómo contactarme?</h1>
        <div className="contact mt-5 d-flex justify-content-around">
          <div className="ways-to-contact">
            <p className="paragrahp">
              <big>Para Poder contactarme</big>, te dejaré diferentes medios de
              contacto como lo son mi correo electrónico, mi Twitter y mi
              Instagram.
            </p>
            <div className="contacts">
              <a
                className="link-btn"
                target="about_blank"
                href="https://www.instagram.com/pablorodriigueezz_/"
              >
                <button className="btn btn-hover-css">
                  <img src={ig} alt="ig" />
                  <span className="span-text">Instagram</span>
                </button>
              </a>
              <a
                className="link-btn"
                target="about_blank"
                href="https://twitter.com/Pablorodriiigue"
              >
                <button className="btn btn-hover-css">
                  <img src={tw} alt="tw" />
                  <span className="span-text">Twitter</span>
                </button>
              </a>
              <a
                className="link-btn"
                target="about_blank"
                href="https://gmail.com"
              >
                <button className="btn btn-hover-css">
                  <img className="gm" src={gm} alt="gm" />
                  <span className="span-text">
                    <b className="gmail">prlf505@gmail.com</b>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <Location />
        </div>
      </article>
    </section>
  );
};

export default Contact;
