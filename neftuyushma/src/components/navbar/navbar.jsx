import logo from "./img/logo1.svg";
import "./style.css";
import { Link, Routes } from "react-router-dom";
import React from "react";
import Burger from "../burger/burger";
import Modal from "../modal/modal";

const nav = () => {
  return (
    <section className="navbar">
      <div className="container">
        <div className="list">
          <Link className="logo_link_img" to="/info">
            <img className="logotip" src={logo} alt="logo" />
          </Link>
          <div className="drListOne list_items">
            Umumiy ma'lumotlar
            <div className="drItemOne">
              <Link to={"/info"} className="link_navbar">
                Markaz haqida
              </Link>

              {/* <Link to={"#"}>Markaz nizomi</Link> */}

              <Link to={"/rah"} className="link_navbar">
                Rahbariyat
              </Link>

              <Link to={"/consultants"} className="link_navbar">
                Maslahatchilar
              </Link>
              <Link to={"/staff"} className="link_navbar">
                Xodimlar
              </Link>
              <Link to={"/contact"} className="link_navbar">
                Aloqa
              </Link>
            </div>
          </div>

          <div className="drListTwo list_items">
            Ilmiy-tadqiqot laboratoriyasi
            <div className="drItemTwo">
              <Link to={"/laboratoryInfo"} className="link_navbar">
                Laboratoriya haqida
              </Link>

              <Link to={"/tahlil"} className="link_navbar">
                Tahlil xizmatlari
              </Link>

              <Link to={"/equipment"} className="link_navbar">
                Jihozlar
              </Link>

              <Link to={"/order"} className="link_navbar">
                Buyurtma qoldirish
              </Link>
            </div>
          </div>
          {/* <div className="drListThree list_items">
            Ilmiy-texnikaviy jurnal
            <div className="drItemThree">
              <Link to={"#"} className="link_navbar">
                Jurnal haqida
              </Link>

              <Link to={"#"} className="link_navbar">
                Jurnal nizomi
              </Link>

              <Link to={"#"} className="link_navbar">
                Bosh muharrir
              </Link>

              <Link to={"#"} className="link_navbar">
                Tahrir hay'ati
              </Link>
              <Link to={"#"} className="link_navbar">
                Arxiv
              </Link>
              <Link to={"#"} className="link_navbar">
                Maqola yuborish
              </Link>
            </div>
          </div>
          <Link className="list_items link_navbar" to={"/corses"}>
            Onlayn o'quv kurslari
          </Link> */}

          <Link className="list_items link_navbar" to={"/librarey"}>
            Neft-gaz elektron kutubxonasi
          </Link>
          <div>
            <Modal />
          </div>

          <div className="burgerMenu">
            <Burger />
          </div>
        </div>
      </div>
    </section>
  );
};

export default nav;
