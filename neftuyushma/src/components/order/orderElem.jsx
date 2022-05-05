import "./orderElem.css";
import DB from "../../db/dbTahlil";
import React, { useState, useEffect, useRef } from "react";

const orderElem = () => {
  const BurgerMenu = () => {
    const [openbm, setOpenbm] = useState(true);
    // const container = useRef(null);

    // const handleClickOutsidebm = (event) => {
    //   if (container.current && !container.current.contains(event.target)) {
    //     setOpenbm(false);
    //   }
    // };

    // useEffect(() => {
    //   document.addEventListener("mousedown", handleClickOutsidebm);

    //   return () => {
    //     // clean up
    //     document.removeEventListener("mousedown", handleClickOutsidebm);
    //   };
    // });
    const opend = () => {};
    return (
      <div className="bt_select">
        <button
          type="button"
          className="bm-select"
          onClick={() => setOpenbm(openbm)}
        >
          xizmatlar
        </button>
        {openbm && (
          <ul className=" bm-option">
            {DB.map((e) => {
              return (
                <li className="order_option" key={e.id}>
                  <label htmlFor="">
                    <input type="checkbox" name={e.name} id="" />
                    {e.name}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };
  return (
    <>
      <section className="order_section">
        <div className="container">
          <div className="order_card">
            <p className="order_text">Buyurtma berish</p>
            <form action="" className="order_form">
              <label htmlFor="" className="order_label">
                <input
                  className="order_input"
                  placeholder="name and surname"
                  required
                  type="text"
                />
              </label>
              <label htmlFor="" className="order_label">
                <input
                  className="order_input"
                  placeholder="phone number"
                  required
                  type="tel"
                />
              </label>
              <label htmlFor="" className="order_label">
                <input
                  className="order_input"
                  placeholder="email"
                  required
                  type="email"
                />
              </label>
              <label htmlFor="" className="order_label">
                <BurgerMenu />
                {/* <select
                  className="order_select"
                  name="xizmat"
                  size={5}
                  // multiple
                  id=""
                > */}

                {/* <option className="order_option " value="active">
                  xizmatlar
                </option>
                {DB.map((e) => {
                  return (
                    <option className="order_option" value={e.id}>
                      {e.name}
                    </option>
                  );
                })} */}
                {/* </select> */}
              </label>
              <label htmlFor="" className="order_label">
                <textarea
                  className=" order_textarea"
                  rows={4}
                  placeholder="additional information"
                  type="select"
                />
              </label>
              <label htmlFor="" className="order_label">
                <button className="order_button">yuborish</button>
              </label>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default orderElem;
