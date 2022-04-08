import "./consultants.css";
import Nav from "../../components/navbar/navbar";
import LiElem from "../../components/el1/liElem";
const consultants = () => {
  return (
    <>
      <Nav />
      <section className="consultants_section">
        <div className="container">
          <div className="consultants_section_div_one">
            <ul className="consultants_section_list">
              <LiElem />
              <LiElem />
              <LiElem />
              <LiElem />
            </ul>
          </div>
          <div className="consultants_section_div_two">
            <ul className="consultants_section_list">
              <LiElem />
              <LiElem />
              <LiElem />
              <LiElem />
            </ul>
          </div>
          <div className="consultants_section_div_three">
            <ul className="consultants_section_list">
              <LiElem />
              <LiElem />
              <LiElem />
              <LiElem />
            </ul>
          </div>
          <ul className="consultants_section_list"></ul>
        </div>
      </section>
    </>
  );
};

export default consultants;
