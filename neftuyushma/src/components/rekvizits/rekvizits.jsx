import "./rekvizits.css";
const img = 1;
const rekvizits = () => {
  return (
    <div className="rekvizit_card">
      <div>
        <img src={img} alt="Img" />
        <h3 className="titel_rekvizit">Revizitar</h3>
      </div>
    </div>
  );
};

export default rekvizits;
