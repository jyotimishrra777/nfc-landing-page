import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/style1.css";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ContactButton from "./ContactButton";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToTop = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <nav className="header sticky-navbar navbar navbar-expand-lg navbar-dark sticky-top w-100">
      <div className="container">
        <span
          className="logo navbar-brand fw-bold text-dark"
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              window.location.href = "/";
            }
          }}
        >
          <img src="/images/ecodelogo.png" alt="Logo" />
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item">
              <Link to="#" className="links nav-link " onClick={scrollToTop}>
                Home
              </Link>
            </li>

            {isHome ? (
              <>
                <li className="nav-item">
                  <Link
                    to="https://www.ecodedash.com/services"
                    target="blank"
                    className="links nav-link "
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.ecodedash.com/about"
                    target="blank"
                    className="links nav-link "
                  >
                    Why Ecode Dash
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="links nav-link fw-bold"
                    role="button"
                  >
                    Services
                  </ScrollLink>
                </li> */}
                {/* <li className="nav-item">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="links nav-link fw-bold"
                    role="button"
                  >
                    Contact
                  </ScrollLink>
                </li> */}
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="links nav-link "
                    to="https://www.ecodedash.com/services"
                    target="blank"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="links nav-link "
                    to="https://www.ecodedash.com/about"
                    target="blank"
                  >
                    Why Ecode Dash
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="d-none d-lg-block d-md-block">
          <ContactButton textData="Get in touch" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
