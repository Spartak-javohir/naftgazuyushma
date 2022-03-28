import "./contact.css";
import Navbar from "../../components/navbar/navbar";
import Map from "../../components/maps/map";
import Infocont from "../../components/infocont/infocont";
import Rekvizits from "../../components/rekvizits/rekvizits";
const contact = () => {
  return (
    <>
      <Navbar />
      <Infocont />
      <Map />
      <Rekvizits />
    </>
  );
};

export default contact;
