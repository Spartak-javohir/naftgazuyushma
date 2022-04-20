import CardElem from "../../components/cardElem/card";
import Nav from "../../components/navbar/navbar";
import "./staff.css";
const staff = () => {
  //   let let1 = ;
  return (
    <>
      <Nav />
      <section className="staff_section">
        <div className="container">
          <CardElem
            className="staff_card"
            text={<b>Laboratoriya mudiri:</b>}
            name="Alixodjayev Axbor"
            num={<b>Kichik ilmiy xodim:</b>}
            mail="Beshimov Umidjon"
            web={<b>Kichik ilmiy xodim:</b>}
            qk="Abdullayev Shoxzod"
            qv={<b>Dasturchi:</b>}
            one="Abdujalilov Javohirbek"
          />
        </div>
      </section>
    </>
  );
};

export default staff;
