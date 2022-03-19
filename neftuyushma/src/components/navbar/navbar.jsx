import "./style.css";
import Logo from "./img/logo1.pngs";

function navbar() {
  var burgerMenu = document.getElementById("burger-menu");
  var overlay = document.getElementById("menu");
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });

  return (
    <nav class="navbar">
      <div class="container">
        <ul>
          <li class="logo_item">
            <a class="logo_link" href="#">
              <img src={Logo} alt="logo" class="logo" />
            </a>
          </li>

          {/* burger menu  */}

          <li class="burger_menu_item">
            <div id="burger-menu">
              <span></span>
            </div>

            <div id="menu">
              <ul>
                <li>
                  <a href="#"> Markaz haqida </a>
                </li>
                <li>
                  <a href="#"> Tadqiqot laboratoriyasi </a>
                </li>
                <li>
                  <a href="#"> Online kurslar</a>
                </li>
                <li>
                  <a href="#"> Neft va gaz uyushmasi </a>
                </li>
                <li>
                  <a href="#"> Neft va gaz kutubxonasi </a>
                </li>
                <li>
                  <a href="#"> Ilmiy tex jurnal </a>
                </li>
              </ul>
            </div>
          </li>
          {/*  burger menu tugadi */}
          <li>
            <a href="#"> Markaz haqida </a>
          </li>
          <li>
            <a href="#"> Tadqiqot laboratoriyasi </a>
          </li>
          <li>
            <a href="#"> Online kurslar</a>
          </li>
          <li>
            <a href="#"> Neft va gaz uyushmasi </a>
          </li>
          <li>
            <a href="#"> Neft va gaz kutubxonasi </a>
          </li>
          <li>
            <a href="#"> Ilmiy tex jurnal </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
