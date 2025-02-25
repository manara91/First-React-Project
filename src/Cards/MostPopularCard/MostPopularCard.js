import "./MostPopularCard.css";
import { FaStar, FaDownload } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
      <div className="most-popular-item">
        <div className="card-wrapper">
          <img className="most-popular-item-img" src={props.image} />
          <div className="most-popular-item-content">
            <div>
              <h4 className="most-popular-item-title">{props.title}</h4>

              <span className="item-category"> {props.category}</span>
            </div>
            <ul>
              <li>
                {" "}
                <span style={{ color: "yellow" }}>
                  <FaStar />
                </span>
                <span> {props.rate}</span>
              </li>
              <li>
                <span style={{ color: "#ec6090" }}>
                  <FaDownload />
                </span>

                <span> {props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
