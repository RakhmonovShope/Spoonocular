import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { createBrowserHistory } from "history";
import { HiOutlineLocationMarker } from "react-icons/hi";

import SelectNav from "./SelectNav";
import "./Navbar.scss";

class HeaderNavbar extends Component {
  componentDidMount() {
    this.detectNavLocation();
  }
  componentDidUpdate() {
    this.detectNavLocation();
  }

  detectNavLocation = () => {
    if (createBrowserHistory().location.pathname === "/") {
      $("li").siblings().removeClass("isActive");
      $("#home").addClass("isActive");
    } else if (createBrowserHistory().location.pathname === "/menu") {
      $("li").siblings().removeClass("isActive");
      $("#menu").addClass("isActive");
    } else if (createBrowserHistory().location.pathname === "/usercart") {
      $("li").siblings().removeClass("isActive");
      $("#usercart").addClass("isActive");
    } else if (createBrowserHistory().location.pathname === "/location") {
      $("li").siblings().removeClass("isActive");
      $("#location").addClass("isActive");
    } else if (createBrowserHistory().location.pathname === "/contact") {
      $("li").siblings().removeClass("isActive");
      $("#contact").addClass("isActive");
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-color navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            <img src="/brandsvg.svg" id="nav-image" alt="about" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" id="home">
                <Link to="/" type="button" className="nav-link">
                  <i className="fa fa-fw fa-home"></i>
                  Home
                </Link>
              </li>
              <li className="nav-item" id="menu">
                <Link to="/menu" className="nav-link" href="#">
                  <HiMenu className="mb-1 mr-1" />
                  Menu
                </Link>
              </li>
              <li className="nav-item" id="contact">
                <Link to="/contact" className="nav-link">
                  <i className="fa fa-fw fa-envelope"></i>
                  Contact
                </Link>
              </li>
              <li className="nav-item " id="location">
                <Link to="/location" className="nav-link">
                  <HiOutlineLocationMarker className="mb-1 mr-1" />
                  Location
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{ cursor: "pointer" }}>
                  <i className="far fa-address-card"></i>About
                </a>
              </li>
            </ul>
            <SelectNav />
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderNavbar;
