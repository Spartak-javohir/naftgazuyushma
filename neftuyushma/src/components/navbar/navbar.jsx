import logo from "./img/logo1.png";
import "./style.css";
import { useState } from "react";
const nav = () => {
  return (
    <section className="navbar">
      <div className="container">
        <ul>
          <li className="logo_item">
            <a className="logo_link" href="#">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </li>

          {/* <!-- burger menu --> */}

          {/* <!-- burger menu tugadi --> */}
          <li>
            <a href="#"> Markaz haqida </a>
          </li>
          <li>
            <a href="#"> Tadqiqot laboratoriyasi </a>
          </li>
          <li>
            <a href="#"> Online kurslar</a>
          </li>
          <li>
            <a href="#"> Neft va gaz uyushmasi </a>
          </li>
          <li>
            <a href="#"> Neft va gaz kutubxonasi </a>
          </li>
          <li>
            <a href="#"> Ilmiy tex jurnal </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default nav;
