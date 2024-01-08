import NavBurg from "../navigation/NavBurger.tsx";
import HeaderMain from "./HeaderMain.tsx";

const HeaderTop = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="header_top-row">
          <a href="#!">
            <img className="logo" src="/img/logo.svg" alt="logo" />
          </a>

          <NavBurg />
        </div>

        <HeaderMain />
      </div>
    </div>
  );
};

export default HeaderTop;
