import "./card.css";

const cardElem = (props) => {
  return (
    <>
      <section>
        <div className="container">
          <div className={`card_div ${props.className}`}>
            <img className="card_img_rah" src={props.img} alt="img" />
            <div className="card_text_div">
              <p className="card_text_div_texts">{props.text}</p>
              <p className="name">{props.name}</p>
              <p className="phoneNum">{props.num}</p>
              <p className="mail">{props.mail}</p>
              <p className="web">{props.web}</p>
              <p className="qk">{props.qk}</p>
              <p className="qv">{props.qv}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default cardElem;
