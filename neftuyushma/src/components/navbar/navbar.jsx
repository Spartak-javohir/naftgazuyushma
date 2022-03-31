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
          <Link to={"/info"}>
            <img className="logotip" src={logo} alt="logo" />
          </Link>
          <Link to={"./info"}>Markaz haqida</Link>
          <Link to="#">
            Tadqiqot <br /> laboratoriyasi
          </Link>
          <Link to="/login"> Online kurslar</Link>
          <Link to="#">
            Neft va gaz <br /> uyushmasi
          </Link>
          <Link to="#">
            Neft va gaz <br /> kutubxonasi
          </Link>
          <Link to="#">
            Ilmiy tex <br /> jurnal
          </Link>
          <Link to="/contact"> Kontaktlar </Link>
          <Burger />
        </ul>
      </div>
    </section>
  );
};

export default nav;
