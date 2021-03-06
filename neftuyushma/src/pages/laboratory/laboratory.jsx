import CardElem from "../../components/cardElem/card";
import Nav from "../../components/navbar/navbar";
import "./style.css";

const laboratory = () => {
  return (
    <>
      <Nav />
      <section className="laboratory_section">
        <div className="container">
          <h2 className="titel_laboratory">Laboratoriya haqida</h2>
          <CardElem
            cardClass="text_laboratory"
            text=" «Neft va gazni qayta ishlash texnologiyalarini ishlab chiqish, loyihalash va mahsulotlarini tahlil qilish» ilmiy-o‘quv markazining ilmiy-tadqiqot laboratoriyasi eng zamonaviy jihozlar bilan ta’minlangan bo’lib, unda neft-gaz, gazkondensati, efirlar, benzin, kerosin, dizel, mazut, motor va surov moylari, bitum va boshqa turli organik moddalarni fizik-kimyoviy tahlillari amalga oshiriladi."
          />
        </div>
      </section>
    </>
  );
};

export default laboratory;

// «Neft va gazni qayta ishlash texnologiyalarini ishlab chiqish, loyihalash va mahsulotlarini tahlil qilish» ilmiy-o‘quv markazining ilmiy-tadqiqot laboratoriyasi eng zamonaviy jihozlar bilan ta’minlangan bo’lib, unda neft-gaz, gazkondensati, efirlar, benzin, kerosin, dizel, mazut, motor va surov moylari, bitum va boshqa turli organik moddalarni fizik-kimyoviy tahlillari amalga oshiriladi.
