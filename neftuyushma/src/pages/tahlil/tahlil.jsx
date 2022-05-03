import Nav from "../../components/navbar/navbar";
import DbTahlil from "./dbTahlil";
import "./tahlil.css";

const tahlil = () => {
  return (
    <>
      <Nav />
      <section className="section_tahlil">
        <div className="container">
          <header className="header_tahlil">
            <h2>
              Tahlil turlari, neft va neft mahsulotlarining bir namunasining
              xossalarini aniqlash uchun vaqt normasi va narxi
            </h2>
          </header>
          <table className="section_tahlil_table">
            <thead className="section_tahlil_thead">
              <tr className="section_tahlil_thead_tr">
                <th className="section_tahlil_thead_th">№</th>
                <th className="section_tahlil_thead_th">Tahlil nomi</th>
                <th className="section_tahlil_thead_th">Tahlillar soni</th>
                <th className="section_tahlil_thead_th">
                  1 tahlil uchun vaqt normasi (daq)
                </th>
                <th className="section_tahlil_thead_th">Jami (daq)</th>
                <th className="section_tahlil_thead_th">
                  Tahlillarning umumiy summasi (QQSsiz) (so’m)
                </th>
                <th className="section_tahlil_thead_th">Apparat rasmi</th>
              </tr>
            </thead>
            <tbody className="section_tahlil_tbody">
              {DbTahlil.map((elem) => {
                return (
                  <tr className="section_tahlil_tbody_tr" key={elem.id}>
                    <th className="section_tahlil_tbody_th">{elem.id}</th>
                    <td className="section_tahlil_tbody_td section_tahlil_tbody_name ">
                      {elem.name}
                    </td>
                    <td className="section_tahlil_tbody_td section_tahlil_tbody_number">
                      {elem.number}
                    </td>
                    <td className="section_tahlil_tbody_td section_tahlil_tbody_time">
                      {elem.time}
                    </td>
                    <td className="section_tahlil_tbody_td section_tahlil_tbody_summ">
                      {elem.summ}
                    </td>
                    <td className="section_tahlil_tbody_td section_tahlil_tbody_price">
                      {elem.price}
                    </td>
                    <td className="section_tahlil_tbody_td section_tahlil_tbody_pictures">
                      <img
                        className="section_tahlil_img"
                        src={elem.pictures}
                        alt="photo"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default tahlil;
