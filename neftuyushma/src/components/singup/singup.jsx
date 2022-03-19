import "./singup.css";

const singup = () => {
  return (
    <section class="login__section">
      <div class="container">
        <div class="cart">
          <nav class="navbar">
            <h2 class="navbar__titel">Sing Up</h2>
          </nav>
          <form action="" class="cart__form">
            <label for="" class="cart__form__label">
              <p>User name</p>
              <input
                type="text"
                placeholder="name"
                required
                class="cart__form__label__input"
              />
            </label>
            <label for="" class="cart__form__label">
              <p>Phone number</p>

              <input
                type="text"
                placeholder="+123456789"
                required
                class="cart__form__label__input phone__number"
              />
            </label>
            <label for="" class="cart__form__label">
              <p>Email</p>

              <input
                type="email"
                placeholder="email@email.com"
                required
                class="cart__form__label__input"
              />
            </label>
            <label for="" class="cart__form__label">
              <p>Password</p>

              <input
                type="password"
                placeholder="password"
                required
                class="cart__form__label__input"
              />
            </label>
            <label for="" class="cart__form__label btn__label">
              <button class="cart__form__label__button">sing up</button>
            </label>
          </form>
        </div>
        <div class="bottom__cart">
          <p>
            Agar ro'yxatdan o'tgan bo'lsangiz <a href="#">sing in</a> orqali
            kiring
          </p>
        </div>
      </div>
    </section>
  );
};

export default singup;
