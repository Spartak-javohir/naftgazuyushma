import "./ijtimoiy.css";
import tel from "./img/tel.svg";
import emailimg from "./img/emailimg.svg";
import tlg from "./img/tlg.svg";
import { Link } from "react-router-dom";

const ijtimoiy = () => {
  return (
    <>
      <ul className="ijtimoiy_card">
        <li className="tel_item">
          <div className="ijtimoiy_haed_tel card_head">
            <svg
              viewBox="0 0 13 22"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="tel_img"
            >
              <title>phone_iphone</title>
              <desc>Created with Sketch.</desc>
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Outlined"
                  transform="translate(-717.000000, -2503.000000)"
                >
                  <g
                    id="Hardware"
                    transform="translate(100.000000, 2404.000000)"
                  >
                    <g
                      id="Outlined-/-Hardware-/-phone_iphone"
                      transform="translate(612.000000, 98.000000)"
                    >
                      <g>
                        <polygon
                          id="Path"
                          points="0 0 24 0 24 24 0 24"
                        ></polygon>
                        <path
                          d="M15.5,1 L7.5,1 C6.12,1 5,2.12 5,3.5 L5,20.5 C5,21.88 6.12,23 7.5,23 L15.5,23 C16.88,23 18,21.88 18,20.5 L18,3.5 C18,2.12 16.88,1 15.5,1 Z M11.5,22 C10.67,22 10,21.33 10,20.5 C10,19.67 10.67,19 11.5,19 C12.33,19 13,19.67 13,20.5 C13,21.33 12.33,22 11.5,22 Z M16,18 L7,18 L7,4 L16,4 L16,18 Z"
                          id="🔹-Icon-Color"
                          fill="#1D1D1D"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <h3 className="ijtimoiy_titel_tel">Telefon raqam:</h3>
          </div>
          <div className="texts_ij">
            <p className="number">(+998-99) 729-99-97</p>
          </div>
        </li>
        <li className="email_item">
          <div className="ijtimoiy_haed_email card_head">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="email_img"
              viewBox="0 0 50 50"
            >
              <g id="Layer_1_1_">
                <path
                  d="M1,11.487v29.146V43h48v-2.367V11.487V7H1V11.487z M3,13.053l15.6,12.209L3,38.886V13.053z M3.62,41l16.584-14.483
		L25,30.27l4.796-3.753L46.38,41H3.62z M47,38.886L31.4,25.261L47,13.052V38.886z M3,9h44v1.513L25,27.73L3,10.513V9z"
                />
              </g>
            </svg>
            <h3 className="ijtimoiy_titel_email">E-mail:</h3>
          </div>
          <div className="texts_ij">
            <p className="email">nglab_info@mail.ru</p>
          </div>
        </li>
        <li className="tlg_item">
          <div className="ijtimoiy_haed_tlg card_head">
            <img src={tlg} alt="icon" />
            <svg
              version="1.0"
              id="Layer_1"
              className="tlg_img"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
            >
              <path
                d="M84.16,14.148l-71.047,29.57c0,0-3.359,1.221-3.099,3.473c0.267,2.256,3.008,3.288,3.008,3.288l17.877,6.382
	c0,0,5.396,18.772,6.458,22.344c1.062,3.562,1.914,3.646,1.914,3.646c0.989,0.456,1.888-0.27,1.888-0.27l11.55-11.169L70.71,86.054
	c4.869,2.253,6.641-2.441,6.641-2.441L90,15.935C90,11.427,84.16,14.148,84.16,14.148z M71.582,78.17L52.324,62.51l-5.976,5.777
	l1.314-12.291l25.67-24.329L38.341,52.441l-15.521-5.54l59.217-24.648L71.582,78.17z"
              />
            </svg>
            <h3 className="ijtimoiy_titel_tlg">Telegram:</h3>
          </div>
          <div className="texts_ij">
            <Link className="telegram" to={"#"}>
              Savol berish
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ijtimoiy;
