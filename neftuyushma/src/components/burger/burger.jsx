import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./test.css";
import Drobdawn from "../drobdawn/drobdawn";

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector(".bm-menu-wrap");
  isOpen
    ? menuWrap.setAttribute("aria-hidden", false)
    : menuWrap.setAttribute("aria-hidden", true);
};

const BurgerMenu = () => {
  return (
    <>
      <Drobdawn />
      {/* <select>
        <option value="active"> Umumiy ma'lumotlar</option>
        <option value="mh">
          <Link to={"/info"}>Markaz haqida</Link>
        </option>
        <option value="rahbariyat">Rahbariyat</option>
        {/* Markaz haqida */}
      {/* </select> */}
      <Link to="#"> Tadqiqot laboratoriyasi </Link>
      <Link to="/login"> Online kurslar </Link>
      <Link to="/"> Neft va gaz uyushmasi </Link>
      <Link to="#"> Neft va gaz kutubxonasi </Link>
      <Link to="#"> Ilmiy tex jurnal </Link>
      <Link to="/contact"> Kontaktlar </Link>
    </>
  );
};

export default BurgerMenu;
