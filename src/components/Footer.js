import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import "../css/footer.css";
import LnImg from "../assets/linkedin_svg.svg";

function Navbar() {
  return (
    <div className="footerDiv">
      <div className="footer">
        <div className="content">
          <div>
            <div className="footer-icons1">
              <a
                href="https://www.linkedin.com/in/abilashananthula/"
                target="_blank"
              >
                <img className="LinkedInSvg" src={LnImg} alt="in" />
              </a>
            </div>
          </div>
          <div className="signDiv">
            <div>
              <div className="logoContainer">
                <div className="card-logo"></div>
                <div className="logoBar1"></div>
                <div className="logoBar2"></div>
              </div>
            </div>
            <p>
              ©2022 <span> abilash.ananthula@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
