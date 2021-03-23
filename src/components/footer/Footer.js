import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container footer-wrapper">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 service-reserved">
          <p>© 2021- 2022. All rights reserved.</p>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12  social-sets">
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://t.me/shope7444.">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 developedBy">
          <p>
            <small>developedBy </small>
            <span>Rakhmonov Shohboz</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
