import "./ijtimoiy.css";
import tel from "./img/tel.svg";
import emailimg from "./img/emailimg.svg";
import tlg from "./img/tlg.svg";

const ijtimoiy = () => {
  return (
    <>
      <ul className="ijtimoiy_card">
        <li className="tel_item">
          <div className="ijtimoiy_haed_tel">
            <img src={tel} alt="icon" />
            <h3 className="ijtimoiy_titel_tel"></h3>
          </div>
          <div className="texts_ij">
            <p className="number">+998 91 234 56 78</p>
          </div>
        </li>
        <li className="email_item">
          <div className="ijtimoiy_haed_email">
            <img src={emailimg} alt="icon" />
            <h3 className="ijtimoiy_titel_email"></h3>
          </div>
        </li>
        <li className="tlg_item">
          <div className="ijtimoiy_haed_tlg">
            <img src={tlg} alt="icon" />
            <h3 className="ijtimoiy_titel_tlg"></h3>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ijtimoiy;
