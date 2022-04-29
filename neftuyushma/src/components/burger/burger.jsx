import Dropdawn from "../drobdawn/drobdawn";
import React, { useState, useEffect, useRef } from "react";
import "./test.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
const { render } = ReactDOM;

const BurgerMenu = () => {
  const [openbm, setOpenbm] = useState(false);
  const container = useRef(null);

  const handleClickOutsidebm = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpenbm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsidebm);

    return () => {
      // clean up
      document.removeEventListener("mousedown", handleClickOutsidebm);
    };
  });

  return (
    <div className="bm_container" ref={handleClickOutsidebm}>
      <button
        type="button"
        className="bm-button"
        onClick={() => setOpenbm(!openbm)}
      >
        <svg
          className="bm-icon"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 92 92"
          enable-background="new 0 0 92 92"
        >
          <path
            id="XMLID_101_"
            d="M78,23.5H14c-3.6,0-6.5-2.9-6.5-6.5s2.9-6.5,6.5-6.5h64c3.6,0,6.5,2.9,6.5,6.5S81.6,23.5,78,23.5z M84.5,46
	c0-3.6-2.9-6.5-6.5-6.5H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,52.5,84.5,49.6,84.5,46z M84.5,75c0-3.6-2.9-6.5-6.5-6.5
	H14c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5h64C81.6,81.5,84.5,78.6,84.5,75z"
          />
        </svg>
      </button>
      {openbm && (
        <ul className="bm-wrapper bm-menu">
          <li className="bm-item-close">
            <button
              type="button"
              className="bm-close"
              onClick={() => setOpenbm(!openbm)}
            >
              <svg
                className="bm-close-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </li>
          <li>
            <Dropdawn />
          </li>
        </ul>
      )}
    </div>
  );
};

export default BurgerMenu;
