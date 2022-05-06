import { Link } from "react-router-dom";
import Nav from "../../components/navbar/navbar";
import "./librariy.css";
import file from "./file/file.pdf";
const library = () => {
  return (
    <>
      <Nav />
      <section className="library_section">
        <div className="container">
          <ul className="library_list">
            <li className="library_item">
              <Link to={file} download>
                file download
              </Link>
            </li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
            <li className="library_item">file download</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default library;
