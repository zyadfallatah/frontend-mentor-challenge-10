import lightLogo from "../assets/shared/desktop/logo-light.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="grid place-items-center lg:grid-cols-3 lg:place-items-start lg:items-center gap-12 bg-dark-grey-blue mt-[9rem] text-center p-14 mb-[4.5rem]">
      <img src={lightLogo} alt="logo" />
      <nav>
        <ul className="flex flex-col md:flex-row gap-6 text-grey font-bold text-[.75rem]">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/create-your-plan">CREATE YOUR PLAN</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="lg:ml-auto">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="#">
              <img src={facebook} alt="facebook logo" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={twitter} alt="twitter logo" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={instagram} alt="instagram logo" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
