import "./rahbariyat.css";
import Card from "../../components/cardElem/card";
import Navbar from "../../components/navbar/navbar";
import img from "./img/rek.jpg";
import pul from "./img/pul.png";
const rahbar = () => {
  return (
    <>
      <section>
        <Navbar />
        <Card img={img} text="salom" />
        <Card img={pul} text="salom" className="right" />
        <Card text="salom" />
      </section>
    </>
  );
};

export default rahbar;
