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
          <Link className="logo_link_img" to="/info">
            <img className="logotip" src={logo} alt="logo" />
          </Link>
          <div className="drListOne">
            Umumiy ma'lumotlar
            <div className="drItemOne">
              <Link to={"/info"}>Markaz haqida</Link>

              <Link to={"#"}>Markaz nizomi</Link>

              <Link to={"#"}>Rahbariyat</Link>

              <Link to={"#"}>Maslahatchilar</Link>
              <Link to={"#"}>Xodimlar</Link>
              <Link to={"/contact"}>Aloqa</Link>
            </div>
          </div>

          <div className="drListTwo">
            Ilmiy-tadqiqot laboratoriyasi
            <div className="drItemTwo">
              <Link to={"#"}>Laboratoriya haqida</Link>

              <Link to={"#"}>Tahlil xizmatlari</Link>

              <Link to={"#"}>Jihozlar</Link>

              <Link to={"#"}>Buyurtma qoldirish</Link>
              <Link to={"#"}>Bog'lanish</Link>
            </div>
          </div>
          <div className="drListThree">
            Ilmiy-texnikaviy jurnal
            <div className="drItemThree">
              <Link to={"#"}>Jurnal haqida</Link>

              <Link to={"#"}>Jurnal nizomi</Link>

              <Link to={"#"}>Bosh muharrir</Link>

              <Link to={"#"}>Tahrir hay'ati</Link>
              <Link to={"#"}>Arxiv</Link>
              <Link to={"#"}>Maqola yuborish</Link>
              <Link to={"#"}>Bog'lanish</Link>
            </div>
          </div>
          <Link className="s" to={"/corses"}>
            Onlayn o'quv kurslari
          </Link>

          <Link to={"/librarey"}>Neft-gaz elektron kutubxonasi</Link>

          <Burger />
        </ul>
      </div>
    </section>
  );
};

export default nav;
