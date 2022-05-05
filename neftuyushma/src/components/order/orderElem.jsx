import "./orderElem.css";
import DB from "../../db/dbTahlil";
import React, { useState, useEffect, useRef } from "react";

const orderElem = () => {
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
              <label className="order_label" for="browser" htmlFor="">
                <input
                  className="order_input"
                  list="browsers"
                  name="xizmatlar"
                  id="browser"
                  type="text"
                  placeholder="xizmatlar"
                />

                <datalist id="browsers">
                  {DB.map((e) => {
                    return (
                      <>
                        <option value={e.name} />
                      </>
                    );
                  })}
                </datalist>
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
