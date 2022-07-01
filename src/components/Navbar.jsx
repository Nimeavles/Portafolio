import React from 'react'
import bars from '../assets/bars.png';

const Navbar2 = () => {
    return (
        <nav className="nav2 fixed-top">
            <input type="checkbox" id="check" />
            <a href="#">
                <h1 className="title mt-2">Pablo Rodríguez</h1>
            </a>
            <ul className="skills">
                <li className="nav2-item">
                    <a href="#about_me" className="route">¿Quién Soy?</a>
                </li>
                <li className="nav2-item">
                    <a href="#skills" className="route">Habilididades</a>
                </li>
                <li className="nav2-item">
                    <a className="route" href="#proyects">Mis Proyectos</a>
                </li>
                <li className="nav2-item">
                    <a className="route" href="#contact">¿Como Contactarme?</a>
                </li>
            </ul>
            <label htmlFor="check" className='checkbtn'>
                <img className='checkbtn-btn' src={bars} alt="icon" />
            </label>
        </nav>
    )
}

export default Navbar2