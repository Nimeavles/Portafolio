
const MyNav = () => {
  return (
    <nav className="d-flex fixed-top navbar navbar-expand-lg text-light">
      <div className="container">
        <h1 className="title mt-2">Pablo Rodríguez</h1>
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
                <a className="route">¿Quién Soy?</a>
            </li>
            <li className="nav-item">
                <a className="route">Mis Proyectos</a>
            </li>
            <li className="nav-item">
                <a className="route">Habilididades</a>
            </li>
            <li className="nav-item">
                <a className="route">¿Como Contactarme?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNav;
