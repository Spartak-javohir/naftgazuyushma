import Rekvizits from "../../components/rekvizits/rekvizits";
import "./infoarr.css";
import Ijtimoiy from "../../components/ijtimoiy/ijtimoiy";
const infoarr = () => {
  return (
    <>
      <section className="infoarr">
        <div className="container">
          <Ijtimoiy />

          <Rekvizits />
        </div>
      </section>
    </>
  );
};

export default infoarr;
