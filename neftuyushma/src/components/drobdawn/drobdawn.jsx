import "./drobdawn.css";
import React, { useState, useEffect, useRef } from "react";

import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const { render } = ReactDOM;

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutside);
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
            <Link to={"#"} className="dropdown-menu__item">
              Item 1
            </Link>
            <Link to={"#"} className="dropdown-menu__item">
              Item 2
            </Link>
            <Link to={"#"} className="dropdown-menu__item">
              Item 3
            </Link>
            <Link to={"#"} className="dropdown-menu__item">
              Item 4
            </Link>
          </ul>
        )}
      </div>
      <div className="dropdown_container" ref={handleClickOutside}>
        <button type="button" className="button" onClick={() => setOpen(!open)}>
          Umumiy ma'lumotlar
        </button>
        {open && (
          <ul className="dropdown-wrapper dropdown-menu">
            <Link to={"#"} className="dropdown-menu__item">
              Item 1
            </Link>
            <Link to={"#"} className="dropdown-menu__item">
              Item 2
            </Link>
            <Link to={"#"} className="dropdown-menu__item">
              Item 3
            </Link>
            <Link to={"#"} className="dropdown-menu__item">
              Item 4
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
