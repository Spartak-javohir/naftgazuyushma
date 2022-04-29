// import React from "react";
// import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
// import Drobdawn from "../drobdawn/drobdawn";

// const toggleMenu = ({ isOpen }) => {
//   const menuWrap = document.querySelector(".bm-menu-wrap");
//   isOpen
//     ? menuWrap.setAttribute("aria-hidden", false)
//     : menuWrap.setAttribute("aria-hidden", true);
// };

// const BurgerMenu = () => {
//   return (
//     <>
//       <Menu noOverlay onStateChange={toggleMenu}>
//         <div className="menu-item">
//           <Drobdawn />
//         </div>
//       </Menu>
//     </>
//   );
// };

//***************** */
import BmImg from "./img/bm.svg";
import React, { useState, useEffect, useRef } from "react";
import "./test.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const { render } = ReactDOM;

const BurgerMenu = () => {
  const [openbm, setOpenbm] = useState(false);
  const container = useRef(null);

  const handleClickOutsidebm = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpenbm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsidebm);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutsidebm);
    };
  });

  return (
    <div className="bm_container" ref={handleClickOutsidebm}>
      <button
        type="button"
        className="bm-button"
        onClick={() => setOpenbm(!openbm)}
      >
        <img src={BmImg} alt="bm icon" />
      </button>
      {openbm && (
        <ul className="bm-wrapper bm-menu">
          <Link to={"/info"} className="bm-menu__item">
            Markaz haqida
          </Link>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
