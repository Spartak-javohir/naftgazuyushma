import Nav from "../../components/navbar/navbar";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import "./equipment.css";

const equipment = () => {
  return (
    <>
      <Nav />
      <section className="equipment_section">
        <div className="container">
          <ul className="left_list">
            <li className="left_item">
              <img className="img_equipment" src={img1} alt="photo" />
              <p className="text_equipment">
                K47900 Настольный элементный анализатор рентгено-флуоресцентной
                спектрометрии с рассеиванием энергии ГОСТ ASTMD4294, ASTMD5059
              </p>
            </li>
            <li className="left_item">
              <img className="img_equipment" src={img2} alt="photo" />
              <p className="text_equipment">
                АРН-ЛАБ-11 (LOIP LP-086A1) Автоматический аппарат для
                определения фракционного состава нефти и нефтепродуктов ГОСТ Р
                ЕН ИСО 3405-2007, ГОСТ ISO 3405-2013, ГОСТ 2177-99, ГОСТ P
                53707-2009, ASTM D-86, ASTM D1078
              </p>
            </li>
            <li className="left_item">
              <img className="img_equipment" src={img3} alt="photo" />
              <p className="text_equipment">
                газовый хроматограф Shimadzu GC-2030 Nexis
              </p>
            </li>
          </ul>
          <ul className="rigth_list">
            <li className="rigth_item">
              <img className="img_equipment" src={img4} alt="photo" />
              <p className="text_equipment">
                Жидкостной хроматограф LC-20 Prominence cо
                спектрофотометрическим детектором
              </p>
            </li>
            <li className="rigth_item">
              <img className="img_equipment" src={img5} alt="photo" />
              <p className="text_equipment">
                Калориметр C 1 IKA Для определения теплотворной способности
                жидких и твердых образцов. ГОСТ DIN 51900 и ISO 1928.
              </p>
            </li>
            <li className="rigth_item">
              <img className="img_equipment" src={img6} alt="photo" />
              <p className="text_equipment">
                DMA 1001 Измеритель плотности Метод с применением осциллирующей
                U-образной трубки ГОСТ Р 57037-2016
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default equipment;
