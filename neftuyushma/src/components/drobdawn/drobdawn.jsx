import "./drobdawn.css";
import React, { useState, useEffect, useRef } from "react";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const { render } = ReactDOM;

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const [openone, setOpenone] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const container = useRef(null);
  const containerone = useRef(null);
  const containertwo = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleClickOutsideone = (event) => {
    if (containerone.current && !containerone.current.contains(event.target)) {
      setOpenone(false);
    }
  };
  const handleClickOutsidetwo = (event) => {
    if (containertwo.current && !containertwo.current.contains(event.target)) {
      setOpentwo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideone);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutsideone);
    };
  });

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsidetwo);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutsidetwo);
    };
  });

  return (
    <section className="dr-section">
      <div className="dropdown_container" ref={handleClickOutside}>
        <button type="button" className="button" onClick={() => setOpen(!open)}>
          Umumiy ma'lumotlar
        </button>
        {open && (
          <ul className="dropdown-wrapper dropdown-menu">
            <Link to={"/info"} className="dropdown-menu__item">
              Markaz haqida
            </Link>
            <Link to={"/rah"} className="dropdown-menu__item">
              Rahbariyat
            </Link>
            <Link to={"/consultants"} className="dropdown-menu__item">
              Maslahatchilar
            </Link>
            <Link to={"/staff"} className="dropdown-menu__item">
              Xodimlar
            </Link>
            <Link to={"/contact"} className="dropdown-menu__item">
              Aloqa
            </Link>
          </ul>
        )}
      </div>
      <div className="dropdown_containerone" ref={handleClickOutsideone}>
        <button
          type="button"
          className="buttonone"
          onClick={() => setOpenone(!openone)}
        >
          Ilmiy-tadqiqot laboratoriyasi
        </button>
        {openone && (
          <ul className="dropdown-wrapperone dropdown-menuone">
            <Link to={"/laboratoryInfo"} className="dropdown-menuone__itemone">
              Laboratoriya haqida
            </Link>

            <Link to={"/tahlil"} className="dropdown-menuone__itemone">
              Tahlil xizmatlari
            </Link>

            <Link to={"/equipment"} className="dropdown-menuone__itemone">
              Jihozlar
            </Link>

            <Link to={"/order"} className="dropdown-menuone__itemone">
              Buyurtma qoldirish
            </Link>
            <Link to={"#"} className="dropdown-menuone__itemone">
              Bog'lanish
            </Link>
          </ul>
        )}
      </div>
      <div className="dropdown_containertwo" ref={handleClickOutsidetwo}>
        <button
          type="button"
          className="buttontwo"
          onClick={() => setOpentwo(!opentwo)}
        >
          Ilmiy-texnikaviy jurnal
        </button>
        {opentwo && (
          <ul className="dropdown-wrappertwo dropdown-menutwo">
            <Link to={"#"} className="dropdown-menutwo__itemtwo">
              Jurnal haqida
            </Link>

            <Link to={"#"} className="dropdown-menutwo__itemtwo">
              Jurnal nizomi
            </Link>

            <Link to={"#"} className="dropdown-menutwo__itemtwo">
              Bosh muharrir
            </Link>

            <Link to={"#"} className="dropdown-menutwo__itemtwo">
              Tahrir hay'ati
            </Link>
            <Link to={"#"} className="dropdown-menutwo__itemtwo">
              Arxiv
            </Link>
            <Link to={"#"} className="dropdown-menutwo__itemtwo">
              Maqola yuborish
            </Link>
            <Link to={"#"} className="dropdown-menutwo__itemtwo">
              Bog'lanish
            </Link>
          </ul>
        )}
      </div>
      <Link className=" bm-linkone" to={"/corses"}>
        Onlayn o'quv kurslari
      </Link>
      <Link className=" bm-link" to={"/librarey"}>
        Neft-gaz elektron kutubxonasi
      </Link>
    </section>
  );
};

export default DropDownMenu;
