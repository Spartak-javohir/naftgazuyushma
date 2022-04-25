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
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Tahlil nomi</th>
                <th>Tahlillar soni</th>
                <th>1 tahlil uchun vaqt normasi (daq)</th>
                <th>Jami (daq)</th>
                <th>Tahlillarning umumiy summasi (QQSsiz) (so’m)</th>
                <th>Apparat rasmi</th>
              </tr>
            </thead>
            <tbody>
              {DbTahlil.map((elem) => {
                console.log(elem.pictures);
                return (
                  <tr>
                    <th>{elem.id}</th>
                    <td>{elem.name}</td>
                    <td> {elem.number} </td>
                    <td>{elem.time}</td>
                    <td>{elem.summ}</td>
                    <td>{elem.price}</td>
                    <td>
                      <img src={"." + elem.pictures} alt="photo" />
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
