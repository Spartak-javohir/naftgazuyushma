import "./card.css";

const cardElem = (props) => {
  return (
    <>
      <div className="crad_div">
        <img src={props.img} alt="img" />
        <div className="card_text_div">
          <p className="rank">{props.runk}</p>
        </div>
      </div>
    </>
  );
};

export default cardElem;
