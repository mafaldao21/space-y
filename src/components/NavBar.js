import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="container">
      <header className="d-flex fixed-top flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        <ul
          className="nav nav-tabs navbar-dark col-12 col-md-auto mb-2 justify-content-center mb-md-0"
          style={{ width: "100vw", fontSize: "10px" }}
        >
          <li>
            <NavLink
              to="linksample"
              className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
            >
              <img src="/img/logo.png" alt="logo" width="120px"></img>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 btn btn-outline-success link-dark"
              style={{ margin: "10px", color: "white" }}
            >
              FALCON 9
            </NavLink>
          </li>
          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 link-dark btn"
              style={{ margin: "10px", color: "white" }}
            >
              FALCON HEAVY
            </NavLink>
          </li>

          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 link-dark btn"
              style={{ margin: "10px", color: "white" }}
            >
              DRAGON
            </NavLink>
          </li>

          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 link-dark btn"
              style={{ margin: "10px", color: "white" }}
            >
              STARSHIP
            </NavLink>
          </li>

          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 link-dark btn"
              style={{ margin: "10px", color: "white" }}
            >
              HUMAN SPACEFLIGHT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 link-dark btn"
              style={{ margin: "10px", color: "white" }}
            >
              RIDESHARE
            </NavLink>
          </li>

          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 link-dark btn"
              style={{ margin: "10px", color: "white" }}
            >
              STARLINK
            </NavLink>
          </li>
          <hr></hr>
          <hr></hr>
          <li>
            <NavLink
              to="linksample"
              className="nav-link px-2 link-dark btn"
              style={{ margin: "10px", color: "white" }}
            >
              SHOP
            </NavLink>
          </li>

          <nav class="navbar navbar-dark ">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              class="collapse navbar-collapse"
              id="navbarToggleExternalContent"
            >
              <div class="bg-dark p-4">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">
                      MISSION <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <hr></hr>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      LAUNCHES
                    </a>
                  </li>
                  <hr></hr>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      CAREERS
                    </a>
                  </li>
                  <hr></hr>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      UPDATES
                    </a>
                  </li>
                  <hr></hr>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      SHOP
                    </a>
                  </li>
                  <hr></hr>
                </ul>
              </div>
            </div>
          </nav>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
