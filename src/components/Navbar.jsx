import logo from "../assets/images/logo.png";
const Navbars = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              CV HASEA
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body container">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/about.html">
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/catalogue.html"
                >
                  Catalogue
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="/contact.html"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <button onclick="darkMode()" className="btn-dark">
              Dark Mode
            </button>
            <div className="form-check form-switch link-light nav-link ps-5 pt-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="checkbox"
                onclick="darkMode()"
              />
              <label className="form-check-label" for="checkbox"></label>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
