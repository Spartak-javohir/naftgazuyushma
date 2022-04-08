import "./liElem.css";
const liElem = (props) => {
  return (
    <li className="ElemLi">
      <img className="Ele" src={props.img} alt="photo" />
      <div className="ElemLi_div">
        <p className="EleLi_div_p ElemLi_div_name"></p>
        <p className="EleLi_div_p ElemLi_div_position"></p>
        <p className="EleLi_div_p ElemLi_div_0ne"></p>
        <p className="EleLi_div_p ElemLi_div_two"></p>
        <p className="EleLi_div_p ElemLi_div_three"></p>
      </div>
    </li>
  );
};

export default liElem;
