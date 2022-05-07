import { Link } from "react-router-dom";
import SingUpService from "../../servise/SingUpService";
import "./singup.css";
import React from "react";

const singup = () => {
  const GetSingUp = async () => {
    let result = await SingUpService.GetSinUp();
    // console.log(result);
  };
  const getCountries = async () => {
    let result = await SingUpService.GetAllRegions();
    // console.log(result);
  };

  getCountries();

  // React.useEffect(() => {
  //   getCountries;
  // });
  const submit = async (event) => {
    event.preventDefault();
    const name = event?.target[0]?.value;
    const phone = event?.target[1]?.value;
    const email = event?.target[2]?.value;
    const password = event?.target[3]?.value;
    let result = await SingUpService.GetSinUp(name, phone, email, password);
    console.log(result);
  };

  return (
    <section className="login__section">
      <div className="container">
        <div className="cart">
          <nav>
            <h2 className="navbar__titel">Sing Up</h2>
          </nav>
          <form action="" className="cart__form" onSubmit={submit}>
            <label for="" className="cart__form__label">
              <p className="cart__form__label__pElem">User name</p>
              <input
                type="text"
                placeholder="name"
                required
                className="cart__form__label__input"
              />
            </label>
            <label for="" className="cart__form__label">
              <p className="cart__form__label__pElem">Phone number</p>

              <input
                type="tel"
                placeholder="+123456789"
                required
                className="cart__form__label__input phone__number"
              />
            </label>
            <label for="" className="cart__form__label">
              <p className="cart__form__label__pElem">Email</p>

              <input
                type="email"
                placeholder="email@email.com"
                required
                className="cart__form__label__input"
              />
            </label>
            <label for="" className="cart__form__label">
              <p className="cart__form__label__pElem">Password</p>

              <input
                type="password"
                placeholder="password"
                required
                className="cart__form__label__input"
              />
            </label>
            <label for="" className="cart__form__label btn__label">
              <button className="cart__form__label__button">sing up</button>
            </label>
          </form>
        </div>
        <div className="bottom__cart">
          <p className="bottom__cart__pElem">
            Agar ro'yxatdan o'tgan bo'lsangiz - <Link to="/">sing in</Link>-
            orqali kiring
          </p>
        </div>
      </div>
    </section>
  );
};

export default singup;
