import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CartDrawer } from "../DrawerCart/CartDrawer";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const { pathname } = useLocation();
  const currentPathname = pathname.split("/")[1];

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
          <li className={`${currentPathname === "" && "active"}`}>
            <Link to="/">Home</Link>
          </li>

          <li className={`${currentPathname === "about-us" && "active"}`}>
            <Link to="/about-us">About Us</Link>
          </li>

          <li className={`${currentPathname === "products" && "active"}`}>
            <Link to="/products">Products</Link>
          </li>
          <li
            onClick={toggleSubmenu}
            className={`dropdown ${isSubmenu ? "active" : ""}`}
          >
            <Link className="cursor-pointer">Pages</Link>
            <IoChevronDown className="i" />
            <ul className="sub-menu">
              <li
                className={`${
                  currentPathname === "product-management" && "active"
                } `}
              >
                <Link to={"/product-management"} className="cursor-pointer">
                  <span>Product Management</span>
                </Link>
              </li>
              <li
                className={`${currentPathname === "add-product" && "active"} `}
              >
                <Link to={"/add-product"} className="cursor-pointer">
                  <span>Add Product</span>
                </Link>
              </li>
              <li
                className={`${
                  currentPathname === "shopping-cart" && "active"
                } `}
              >
                <Link to={"/shopping-cart"} className="cursor-pointer">
                  <span>Shopping Cart</span>
                </Link>
              </li>
              <li
                className={`${
                  currentPathname === "order-history" && "active"
                } `}
              >
                <Link to={"/order-history"} className="cursor-pointer">
                  <span>Order History</span>
                </Link>
              </li>
              <li className={`${currentPathname === "our-team" && "active"} `}>
                <Link to={"/our-team"} className="cursor-pointer">
                  <span>Our Team</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={`${currentPathname === "contact-us" && "active"}`}>
            <Link to="/contact-us">Contact Us</Link>
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
