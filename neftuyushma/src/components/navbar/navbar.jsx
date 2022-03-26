import logo from "./img/logo1.png";
import "./style.css";
import { Link, Routes } from "react-router-dom";
import React from "react";
import Burger from "../burger/test";

const nav = () => {
  return (
    <section className="navbar">
      <div className="container">
        <ul>
          <li className="logo_item">
            <Link className="logo_link" to="/info">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </li>

          {/* <!-- burger menu --> */}
          <li className="burger">
            <Burger />
          </li>
          {/* <!-- burger menu tugadi --> */}
          <li className="list_items">
            <Link to="/info"> Markaz haqida </Link>
          </li>
          <li className="list_items">
            <Link to="#">
              Tadqiqot <br /> laboratoriyasi
            </Link>
          </li>
          <li className="list_items">
            <Link to="/login"> Online kurslar</Link>
          </li>
          <li className="list_items">
            <Link to="#">
              Neft va gaz <br /> uyushmasi
            </Link>
          </li>
          <li className="list_items">
            <Link to="#">
              Neft va gaz <br /> kutubxonasi
            </Link>
          </li>
          <li className="list_items">
            <Link to="#">
              Ilmiy tex <br /> jurnal
            </Link>
          </li>
          <li className="list_items">
            <Link to="/contact"> Kontaktlar </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default nav;
