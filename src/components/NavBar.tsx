import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import burgerIcon from "../assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../assets/shared/mobile/icon-close.svg";

const mobileDesign = `block absolute py-10 left-0 top-20 z-50 bg-gradient-to-b from-light-cream to-transparent grad 
  w-full text-center text-dark-grey-blue font-[900] space-y-8 min-h-svh text-[24px] fraunces`;

const desktopDesign = `md:uppercase gap-8 font-bold text-grey text-[12px]`;

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleClick = function () {
    setIsNavActive(!isNavActive);
  };

  const appliedDesign = isNavActive ? mobileDesign : desktopDesign;

  return (
    <nav className="relative flex justify-between items-center py-8 md:py-[50px] bg-light-cream">
      <img
        src={logo}
        alt="logo"
        className="w-[163px] h-[18px] md:w-[236px] md:h-[26px]"
      />
      <img
        src={isNavActive ? closeIcon : burgerIcon}
        alt="burger menu"
        className="md:hidden w-4 h-[15px]"
        onClick={handleClick}
      />

      <ul
        className={`md:uppercase ${
          isNavActive ? appliedDesign : "hidden"
        } md:flex md:${appliedDesign}`}
      >
        <li>
          <NavLink
            to="/frontend-mentor-challenge-10/"
            onClick={() => setIsNavActive(false)}
            className={`hover:text-dark-grey-blue`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/frontend-mentor-challenge-10/about"
            onClick={() => setIsNavActive(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-dark-grey-blue" : ""
              } hover:text-dark-grey-blue`
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/frontend-mentor-challenge-10/create-your-plan"
            onClick={() => setIsNavActive(false)}
            className={({ isActive }) =>
              `${
                isActive ? "text-dark-grey-blue" : ""
              } duration-300 ease-in-out hover:text-dark-grey-blue`
            }
          >
            Create Your Plan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
