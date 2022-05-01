import { Link } from "react-router-dom";

import "./login.css";
const login = () => {
  return (
    <>
      <section className="login__section">
        <div className="container">
          <div className="cart">
            <nav>
              <h2 className="navbar__titel">Login</h2>
            </nav>
            <form action="" className="cart__form">
              <label for="" className="cart__form__label">
                <input
                  type="email"
                  placeholder="email"
                  required
                  className="cart__form__label__input"
                />
              </label>
              <label for="" className="cart__form__label">
                <input
                  type="password"
                  placeholder="password"
                  required
                  className="cart__form__label__input"
                />
              </label>
              <label for="" className="cart__form__label btn__label">
                <button className="cart__form__label__button">sing in</button>
              </label>
            </form>
          </div>
          <div className="bottom__cart">
            <p className="bottom__cart__text">
              Agar ro'yxatdan o'tmagan bo'lsangiz-
              <Link to="/register">sing up</Link>- orqali ro'yxardan o'ting
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
