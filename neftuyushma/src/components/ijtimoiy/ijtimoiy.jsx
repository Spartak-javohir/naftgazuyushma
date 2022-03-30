import "./ijtimoiy.css";
import tel from "./img/tel.svg";
import emailimg from "./img/emailimg.svg";
import tlg from "./img/tlg.svg";

const ijtimoiy = () => {
  return (
    <>
      <ul className="ijtimoiy_card">
        <li className="tel_item">
          <div className="ijtimoiy_haed_tel card_head">
            <img className="tel_img" src={tel} alt="icon" />
            <h3 className="ijtimoiy_titel_tel">Telefon raqam:</h3>
          </div>
          <div className="texts_ij">
            <p className="number">(+998-99) 729-99-97</p>
          </div>
        </li>
        <li className="email_item">
          <div className="ijtimoiy_haed_email card_head">
            <img className="email_img" src={emailimg} alt="icon" />
            <h3 className="ijtimoiy_titel_email">E-mail:</h3>
          </div>
          <div className="texts_ij">
            <p className="email">nglab_info@mail.ru</p>
          </div>
        </li>
        <li className="tlg_item">
          <div className="ijtimoiy_haed_tlg card_head">
            <img className="tlg_img" src={tlg} alt="icon" />
            <h3 className="ijtimoiy_titel_tlg">Telegram:</h3>
          </div>
          <div className="texts_ij">
            <p className="telegram">Savol berish</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ijtimoiy;
