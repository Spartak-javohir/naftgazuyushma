import React, { useState } from "react";
import { MenuItems } from "../menuItem/MenuItems";
import "./drobdawn.css";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <li key={1}>
          <Link
            className="dropdown-link"
            to="/list"
            onClick={() => setClick(false)}
          >
            drobdawn
          </Link>
        </li>
        <li key={2}>
          <Link
            className="dropdown-link"
            to="/list"
            onClick={() => setClick(false)}
          >
            qqsk
          </Link>
        </li>
        <li key={3}>
          <Link
            className="dropdown-link"
            to="/list"
            onClick={() => setClick(false)}
          >
            qqsk
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
