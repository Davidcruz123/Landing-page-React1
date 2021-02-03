export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg-dark ">
      <div className="container-fluid dark" style={{ color: "white" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse success"
          id="navbarTogglerDemo01"
          style={{ color: "white" }}
        >
          <a className="navbar-brand text-white" href="#">
            Start Bootstrap
          </a>
        </div>

        <div>
          <div
            className="collapse navbar-collapse ml-auto "
            id="navbarTogglerDemo01"
          >
            <a className="navbar-brand ml-auto text-white" href="#">
              Home
            </a>
            <a className="navbar-brand ml-auto text-white" href="#">
              About
            </a>
            <a className="navbar-brand ml-auto text-white" href="#">
              Services
            </a>
            <a className="navbar-brand ml-auto text-white" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};