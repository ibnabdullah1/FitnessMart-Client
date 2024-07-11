import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/dark-logo.png";
const Footer = () => {
  return (
    <footer className="text-white p-10 bg-[#181818] ">
      <div className="max-w-7xl mx-auto ">
        <img src={logo} alt="Logo" className="mb-7 w-[120px]" />
        <div className="lg:flex justify-between  md:grid grid-cols-1 md:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <p className="mb-4">
              123 Main Street Anytown, USA
              <br />
              Postal Code: 12345
            </p>
            <p>
              <a
                href="mailto:support@oyolloo.com"
                className="hover:text-primary mb-4 font-normal"
              >
                Support: support@oyolloo.com
              </a>
            </p>
            <p className="hover:text-primary mb-4 font-normal">
              (Available: 10:00am to 07:00pm)
            </p>
          </div>
          <div className="mb-8 md:mb-5">
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  Success Page
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  Terms And Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  Scheduling
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-primary mb-4 font-normal">
                  Patient Portal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg  mb-2">Follow Us</h3>

            <div className="flex gap-6 items-center mb-6">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>

            <p>@Docplus 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
