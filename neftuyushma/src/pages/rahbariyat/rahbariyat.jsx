import "./rahbariyat.css";
import Card from "../../components/cardElem/card";
import Navbar from "../../components/navbar/navbar";
import img from "./img/rek.jpg";
import pul from "./img/pul.png";
import oyb from "./img/oyb.png";
import eld from "./img/eld.jpg";

const rahbar = () => {
  return (
    <>
      <Navbar />

      <section className="card_section_rah">
        <Card
          img={img}
          text="Institut rektori"
          name="Usmonov Botir Shukurillayevich"
          num="Tel: +998712447920"
          mail="Faks: +998712447917"
          web="E-mail: txti_rektor@edu.uz Virtual qabulxona"
          qk="Qabul vaqti: Har kuni: 08:00-10:00"
        />
        <Card
          img={pul}
          text="Ilmiy ishlar va innovasiyalar bo`yicha prorektor"
          name="Pulatov Xayrulla Lutpullayevich"
          num="Tel: +998712447924"
          mail="E-mail: pulatov.x.l@dba.uz"
          qk="Qabul qilish kuni: seshanba, juma"
          qv="Qabul qilish vaqti: Soat 15:00-17:00"
          className="right"
        />
        <Card
          img={oyb}
          text="Kafedra mudiri"
          name="Aripdjanov Oybek Yusupdjanovich"
          num="Tel: +998977744122"
          mail="E-mail: Oybek_396@mail.ru"
          qk="Qabul kunlari:   Seshanba,Payshanba"
          qv="Qabul qilish vaqti: 14:00-16:00"
        />
        <Card
          img={eld}
          text="Markaz direktori"
          name="Mashayev Eldor Ergashvoy o’g’li"
          num="Tel: +998933922272"
          mail="E-mail: eldor.mashayev@mail.ru"
          web="Web site: www.dreldor.uz"
          qk="Qabul qilish kuni: seshanba, payshanba"
          qv="Qabul qilish vaqti: soat 15:00-17:00"
          className="right"
        />
      </section>
    </>
  );
};

export default rahbar;
