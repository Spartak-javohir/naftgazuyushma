import "./rekvizits.css";
const rekvizits = () => {
  return (
    <div className="rekvizit_card">
      <div className="head_hover">
        <svg
          className="rek-img"
          id="레이어_1"
          data-name="레이어 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path d="M39.22,9H8.78a4.86,4.86,0,0,0-4.85,4.85V34.18A4.86,4.86,0,0,0,8.78,39H39.22a4.86,4.86,0,0,0,4.85-4.85V13.82A4.86,4.86,0,0,0,39.22,9ZM6.07,13.82A2.72,2.72,0,0,1,8.78,11.1H39.22a2.72,2.72,0,0,1,2.71,2.72v3.83H6.07ZM41.93,34.18a2.72,2.72,0,0,1-2.71,2.72H8.78a2.72,2.72,0,0,1-2.71-2.72V19.78H41.93Z" />
          <path d="M13,34.46A3.5,3.5,0,1,0,9.51,31,3.5,3.5,0,0,0,13,34.46Zm0-5.21A1.71,1.71,0,1,1,11.31,31,1.71,1.71,0,0,1,13,29.25Z" />
        </svg>
        <h3 className="titel_rekvizit">Revizitar:</h3>
      </div>
      <div className="texts_div">
        <p className="p_yuad text_info">
          100011, Toshkent sh., Navoiy ko‘chasi, 32
        </p>
      </div>
    </div>
  );
};

export default rekvizits;
