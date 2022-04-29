import "./drobdawn.css";
import React, { useState, useEffect, useRef } from "react";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const { render } = ReactDOM;

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const [openone, setOpenone] = useState(false);
  const container = useRef(null);
  const containerone = useRef(null);

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
            <Link to={"/laboratoryInfo"} className="dropdown-menu__itemone">
              Laboratoriya haqida
            </Link>

            <Link to={"/tahlil"} className="dropdown-menu__itemone">
              Tahlil xizmatlari
            </Link>

            <Link to={"#"} className="dropdown-menu__itemone">
              Jihozlar
            </Link>

            <Link to={"#"} className="dropdown-menu__itemone">
              Buyurtma qoldirish
            </Link>
            <Link to={"#"} className="dropdown-menu__itemone">
              Bog'lanish
            </Link>
          </ul>
        )}
      </div>
    </section>
  );
};

// const App = () => (
//   <div className="App">
//     <DropDownMenu />
//   </div>
// );

export default DropDownMenu;
