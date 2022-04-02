import logo from "./img/logo1.svg";
import "./style.css";
import { Link, Routes } from "react-router-dom";
import React from "react";
import Burger from "../burger/test";

const nav = () => {
  return (
    <section className="navbar">
      <div className="container">
        <ul className="list">
          <Link to="/info">
            <img className="logotip" src={logo} alt="logo" />
          </Link>
          <div className="drListOne">
            <p>Umumiy ma’lumotlar</p>
            <div className="drItemOne">
              <Link to={"#"}>Markaz haqida</Link>

              <Link to={"#"}>Markaz nizomi</Link>

              <Link to={"#"}>Rahbariyat</Link>

              <Link to={"#"}>Maslahatchilar</Link>
              <Link to={"#"}>Xodimlar</Link>
              <Link to={"#"}>Aloqa</Link>
            </div>
          </div>

          <Link to="/info">Umumiy ma’lumotlar</Link>
          <Link to="#">Ilmiy-tadqiqot laboratoriyasi</Link>
          <Link to="/login"> Ilmiy-texnikaviy jurnal</Link>
          <Link to="#">Onlayn o’quv kurslari</Link>
          <Link to="#">Neft-gaz elektron kutubxonasi</Link>

          <Burger />
        </ul>
      </div>
    </section>
  );
};

export default nav;
