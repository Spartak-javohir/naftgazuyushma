import "./rekvizits.css";
import img from "./img/rek.svg";
const rekvizits = () => {
  return (
    <div className="rekvizit_card">
      <div className="head_hover">
        <img src={img} alt="Img" />
        <h3 className="titel_rekvizit">Revizitar:</h3>
      </div>
      <div className="texts_div">
        <p className="p_yuad text_info">
          100011, Toshkent sh., Navoiy ko‘chasi, 32
        </p>
      </div>
    </div>
  );
};

export default rekvizits;
