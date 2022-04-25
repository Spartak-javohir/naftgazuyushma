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
      <ul>
        <li>
          <Drobdawn />
          {/* <select>
        <option value="active"> Umumiy ma'lumotlar</option>
        <option value="mh">
        </option>
        <option value="rahbariyat">Rahbariyat</option>
        {/* Markaz haqida */}
          {/* </select> */}
        </li>
        <li>
          <Link to="#"> Tadqiqot laboratoriyasi </Link>
        </li>
        <li>
          <Link to="/login"> Online kurslar </Link>
        </li>
        <li>
          <Link to="/"> Neft va gaz uyushmasi </Link>
        </li>
        <li>
          <Link to="#"> Neft va gaz kutubxonasi </Link>
        </li>
        <li>
          <Link to="#"> Ilmiy tex jurnal </Link>
        </li>
        <li>
          <Link to="/contact"> Kontaktlar </Link>
        </li>
      </ul>
    </>
  );
};

export default BurgerMenu;
