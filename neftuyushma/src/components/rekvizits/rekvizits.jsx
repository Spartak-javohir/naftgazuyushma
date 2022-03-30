import "./rekvizits.css";
import img from "./img/rek.svg";
const rekvizits = () => {
  return (
    <div className="rekvizit_card">
      <div className="head_hover">
        <img src={img} alt="Img" />
        <h3 className="titel_rekvizit">Revizitar:</h3>
      </div>
      <p className="p_inn text_info">ИНН:123456890</p>
      <p className="p_kpp text_info">КПП:123456789</p>
      <p className="p_ogrn text_info">ОГРН:123456890123</p>
      <p className="p_yuad text_info">
        Юр. адрес: 111999, TOSHKENT SHAHAR,ALISHER NAVOIY KUCHASI, 36-UY
      </p>
      <p className="p_ls text_info">Л/с: 12345A67890 ("A" harfi - uzbekcha)</p>
      <p className="p_bankname text_info">Наименование банка: NBU</p>
      <p className="p_bik text_info">БИК: 012345678</p>
      <p className="p_ygh text_info">
        Единый казначейский счет: 40102810545370000003
      </p>
      <p className="p_gh text_info"> Казначейский счет: 03214643000000017300</p>
      <p className="p_hk text_info">Код территории по ОКТМО - 45398000</p>
    </div>
  );
};

export default rekvizits;
