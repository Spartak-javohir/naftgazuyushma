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
      <section>
        <Navbar />
        <Card img={img} text="salom" />
        <Card img={pul} text="salom" className="right" />
        <Card img={oyb} />
        <Card img={eld} className="right" />
      </section>
    </>
  );
};

export default rahbar;
