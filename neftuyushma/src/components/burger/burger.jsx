import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./test.css";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <Menu noOverlay onStateChange={toggleMenu}>
      <Link to="/info"> Markaz haqida </Link>
      <Link to="#"> Tadqiqot laboratoriyasi </Link>
      <Link to="/login"> Online kurslar </Link>
      <Link to="/"> Neft va gaz uyushmasi </Link>
      <Link to="#"> Neft va gaz kutubxonasi </Link>
      <Link to="#"> Ilmiy tex jurnal </Link>
      <Link to="/contact"> Kontaktlar </Link>
    </Menu>
  );
};

export default BurgerMenu;
