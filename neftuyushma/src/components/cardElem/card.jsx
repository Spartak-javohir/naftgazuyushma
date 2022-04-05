import "./card.css";

const cardElem = (props) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="card_div">
            <img src={props.img} alt="img" />
            <div className="card_text_div">
              <p className={props.className}>{props.text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default cardElem;
