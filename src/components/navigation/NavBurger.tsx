import Hamburger from "hamburger-react";
import { useState } from "react";
import Navigation from "./Navigation.tsx";

const NavBurg = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header_nav-btn">
      <Hamburger toggled={isOpen} toggle={setOpen} size={25} direction="left" />
      {isOpen && (
        <div className="header_top-row--mobile">
          <a href="#!">
            <img src="./img/logo.svg" alt="Loft House" />
          </a>

          <div className="header_nav">
            <Navigation />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBurg;
