import "./drobdawn.css";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// import { ReactComponent as CaretIcon } from "./icons/caret.svg";
// // import { ReactComponent as CogIcon } from "./icons/cog.svg";
// // import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
// // import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
// // import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

import React, { useState, useEffect, useRef } from "react";
// import { CSSTransition } from "react-transition-group";

// function Dropdown() {
//   return (
//     // <Navbar>
//     <NavItem name="Markaz haqida" icon={<CaretIcon />}>
//       <DropdownMenu></DropdownMenu>
//     </NavItem>
//     // </Navbar>
//   );
// }

// // function Navbar(props) {
// //   return (
// //     <nav className="navbar_list">
// //       <ul className="navbar-nav">{props.children}</ul>
// //     </nav>
// //   );
// // }

// function NavItem(props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="nav-item">
//       <button className="icon-button" onClick={() => setOpen(!open)}>
//         {props.name}
//         {props.icon}
//       </button>

//       {open && props.children}
//     </div>
//   );
// }

// function DropdownMenu() {
//   const [activeMenu, setActiveMenu] = useState("main");
//   const [menuHeight, setMenuHeight] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
//   }, []);

//   // function calcHeight(el) {
//   //   const height = el.offsetHeight;
//   //   setMenuHeight(height);
//   // }

//   function DropdownItem(props) {
//     return (
//       <div
//         className="menu-item"
//         onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
//       >
//         {/* <span className="icon-button">{props.leftIcon}</span> */}
//         {props.children}
//         {/* <span className="icon-right">{props.rightIcon}</span> */}
//       </div>
//     );
//   }

//   return (
//     <div className="dropdown" ref={dropdownRef}>
//       {/* <CSSTransition
//         in={activeMenu === "main"}
//         timeout={500}
//         classNames="menu-primary"
//         unmountOnExit
//         onEnter={calcHeight}
//       > */}
//       <div className="menu">
//         <DropdownItem>
//           <Link to={"/info"}>Markaz haqida</Link>
//         </DropdownItem>

//         <DropdownItem>
//           <Link to={"/rah"}>Rahbariyat</Link>
//         </DropdownItem>

//         <DropdownItem>
//           <Link to={"/consultants"}>Maslahatchilar</Link>
//         </DropdownItem>

//         <DropdownItem>
//           <Link to={"/staff"}>Xodimlar</Link>
//         </DropdownItem>

//         <DropdownItem>
//           <Link to={"/contact"}>Aloqa</Link>
//         </DropdownItem>
//       </div>
//       {/* </CSSTransition> */}
//     </div>
//   );
// }

// export default Dropdown;

// **********

// const { ReactDOM } = window;
// const { useEffect, useState, useRef } = react;
// const { render } = ReactDOM;

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
    <div className="container" ref={container}>
      <button type="button" className="button" onClick={() => setOpen(!open)}>
        ☰
      </button>
      {open && (
        <div className="dropdown-wrapper">
          <ul className="dropdown-menu">
            <li className="dropdown-menu__item">Item 1</li>
            <li className="dropdown-menu__item">Item 2</li>
            <li className="dropdown-menu__item">Item 3</li>
            <li className="dropdown-menu__item">Item 4</li>
          </ul>
        </div>
      )}
    </div>
  );
};

// const App = () => (
//   <div className="App">
//     <DropDownMenu />
//   </div>
// );

export default DropDownMenu;
