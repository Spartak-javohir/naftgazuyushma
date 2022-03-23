import "./login.css";

const login = () => {
  return (
    <section className="login__section">
      <div className="container">
        <div className="cart">
          <nav className="navbar">
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
          <p>
            Agar ro'yxatdan o'tmagan bo'lsangiz <a href="#">sing up</a> orqali
            ro'yxardan o'ting
          </p>
        </div>
      </div>
    </section>
  );
};

export default login;
