import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FaceBook from '../../assets/img/facebook.png';
import YouTube from '../../assets/img/youtube.png';
import Instagram from '../../assets/img/instagram.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer_wrapper">
              <div className="footer_block">
            <Link to={"/"}>
                <div className="logo">
                <h1>
                  Asia<span class="colortext">Motors</span>
                </h1>
                </div>
            </Link>
            
            <div className="foot_icons">
              <img src={FaceBook} alt="" />
              <img src={YouTube} alt="" />
              <img src={Instagram} alt="" />
            </div>
              </div>
        <div className="footer_block">
            <h5 >About Us</h5>
            <p>About AsiaMotors.com</p>
            <p>Contact Us</p>
            <p>Banner Ad</p>
            <p>Term of use</p>
            <p>Privacy Policy</p>            
        </div>
        <div className="footer_block  ">
            <h5 >How to Buy</h5>
            <p> "“Buy it Safely” (B.I.S)</p>
            <p >Vehicle Purchase Guide</p>
            <h5>Additional Services</h5>
            <p>Container Shipping</p>
        </div>
        <div className="footer_block  ">
            <h5 >Shipping</h5>
            <p>Shipping Schedule</p>
            <p >Type of Shipping</p>
        </div>
        <div className="footer_block  ">
            <h5 >Community</h5>
            <p>Customer`s Reviews</p>
            <p >AsiaMotors Magazine</p>
        </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
