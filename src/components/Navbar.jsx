
const MyNav = () => {
  return (
    <nav className="d-flex fixed-top navbar navbar-expand-lg text-light">
      <div className="container">
        <a href="#"><h1 className="title mt-2">Pablo Rodríguez</h1></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="ms-auto skills navbar-nav">
            <li className="nav-item">
                <a href="#about_me" className="route">¿Quién Soy?</a>
            </li>
            <li className="nav-item">
                <a href="#skills"className="route">Habilididades</a>
            </li>
            <li className="nav-item">
                <a className="route" href="#proyects">Mis Proyectos</a>
            </li>
            <li className="nav-item">
                <a className="route" href="#contact">¿Como Contactarme?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
