import React from "react";
import "../Navbar/navbar.css";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="wrapper shadow-md">
        <div className="logo">
          <img src="./Syncabout Logo.png" className="h-10 md:h-14" />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links font-Pontano ">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
            <IoClose />
          </label>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#" className="desktop-item">
              Company
            </a>

            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Company
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Why Choose Us</a>
              </li>
              <li>
                <a href="#">What We Work</a>
              </li>
              <li>
                <a href="#">Life At Syncabout</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">SAP Services</a>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Services
            </a>
            <input type="checkbox" id="showDropTwo" />
            <label htmlFor="showDropTwo" className="mobile-item">
              Services
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Software Development</a>
              </li>
              <li>
                <a href="#">Mobile App Development</a>
              </li>
              <li>
                <a href="#">Custom ERP Development</a>
              </li>
              <li>
                <a href="#">SEO Service</a>
              </li>
              <li>
                <a href="#">Social Media Marketing</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Cloud Services
            </a>
            <input type="checkbox" id="showDropThree" />
            <label htmlFor="showDropThree" className="mobile-item">
              Cloud Services
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">AWS</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Portfolio
            </a>
            <input type="checkbox" id="showDropFour" />
            <label htmlFor="showDropFour" className="mobile-item">
              Portfolio
            </label>
            <ul className="drop-menu">
              <li>
                <a href="#">Graphics Portfolio</a>
              </li>
              <li>
                <a href="#">UI/UX Portfolio</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Blogs</a>
          </li>
          <div>
            <Link
              to={"/"}
              className="bg-[#ef7f1a]  p-4 rounded hover:bg-[#091a38] text-white font-Pontano font-bold text-base"
            >
              Contact Us
            </Link>
          </div>
        </ul>

        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
          <FaBars />
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
