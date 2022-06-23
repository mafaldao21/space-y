import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
return (
  <footer className="container text-center mt-4">
    <div className="row">
      <div className="col font-weight-light">
        <p className="small" style={{ color: "grey" }}>
          SPACEX© 2022
          <NavLink
            to="examplelink"
            style={{ margin: "15px", color: "white", textDecoration: "none" }}
          >
            TWITTER
          </NavLink>
          <NavLink
            to="examplelink"
            style={{ margin: "15px", color: "white", textDecoration: "none" }}
          >
            YOUTUBE
          </NavLink>
          <NavLink
            to="examplelink"
            style={{ margin: "15px", color: "white", textDecoration: "none" }}
          >
            INSTAGRAM
          </NavLink>
          <NavLink
            to="examplelink"
            style={{ margin: "15px", color: "white", textDecoration: "none" }}
          >
            FLICKR
          </NavLink>
          <NavLink
            to="examplelink"
            style={{ margin: "15px", color: "white", textDecoration: "none" }}
          >
            LINKEDIN
          </NavLink>
          <NavLink
            to="examplelink"
            style={{ margin: "15px", color: "white", textDecoration: "none" }}
          >
            PRIVACY POLICY
          </NavLink>
          <NavLink
            to="examplelink"
            style={{ margin: "15px", color: "white", textDecoration: "none" }}
          >
            SUPPLIERS
          </NavLink>
        </p>
      </div>
    </div>
  </footer>
);
}

export default Footer