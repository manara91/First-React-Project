import "./FeaturedGamesCard.css";
import { FaStar, FaDownload } from "react-icons/fa";

const FeaturedGamesCard = (props) => {
  return (
    <div className="featured-games-card-item">
      <img src={props.image} />

      <div className="featured-games-card-item-content">
        <div>
          <h4>{props.title}</h4>

          <p>{props.category}</p>
        </div>

        <ul>
          <li>
            {" "}
            <span style={{ color: "yellow", fontSize: "14px" }}>
              <FaStar />
            </span>
            <span style={{ fontSize: "14px" }}> {props.rate}</span>
          </li>
          <li>
            <span style={{ color: "#ec6090", fontSize: "14px" }}>
              <FaDownload />
            </span>

            <span style={{ fontSize: "14px" }}> {props.download}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturedGamesCard;
