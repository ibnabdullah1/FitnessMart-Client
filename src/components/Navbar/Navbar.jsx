import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CartDrawer } from "../DrawerCart/CartDrawer";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleSubmenu = () => {
    setIsSubmenu((prev) => !prev);
  };

  return (
    <header className="header  max-w-7xl mx-auto">
      <div className="logo">
        <Link to={"/"}>
          <img className="w-[100px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="head">
          <button
            type="button"
            className="close-menu-btn"
            onClick={toggleMenu}
          ></button>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About Us</Link>
          </li>
          <li
            onClick={toggleSubmenu}
            className={`dropdown ${isSubmenu ? "active  " : ""}`}
          >
            <Link className="cursor-pointer">Categories</Link>
            <IoChevronDown className="i" />
            <ul className="sub-menu">
              <li className="">
                <Link className="cursor-pointer">
                  <span>Elliptical Trainer</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>Hex Dumbbells</span>
                </Link>
              </li>

              <li className="">
                <Link className="cursor-pointer">
                  <span>Walking Pad</span>
                </Link>
              </li>

              <li className="">
                <Link className="cursor-pointer">
                  <span>Treadmills</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>Rowing Machine</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>Massage Chair</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>Jump Rope</span>
                </Link>
              </li>

              <li className="">
                <Link className="cursor-pointer">
                  <span>GYM Equipment</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>Exercise Cycle</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>
          <li
            onClick={toggleSubmenu}
            className={`dropdown ${isSubmenu ? "active  " : ""}`}
          >
            <Link className="cursor-pointer">Pages</Link>
            <IoChevronDown className="i" />
            <ul className="sub-menu">
              <li className="">
                <Link to={"/shopping-cart"} className="cursor-pointer">
                  <span>Shopping Cart</span>
                </Link>
              </li>
              <li className="">
                <Link to={"/payment-history"} className="cursor-pointer">
                  <span>Payment History</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>FAQ</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>Blog</span>
                </Link>
              </li>
              <li className="">
                <Link className="cursor-pointer">
                  <span>Testimonials</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center">
        <CartDrawer />
        <div className="flex lg:hidden header-right">
          <button type="button" className="open-menu-btn" onClick={toggleMenu}>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
