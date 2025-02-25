import "./TopDownloadCard.css";
import { FaStar, FaDownload } from "react-icons/fa";

const TopDownloadCard = (props) => {
  return (
    <div>
      <div className="topDownload-card">
        <div className="first-col">
          <img src={props.image} />
        </div>

        <div className="second-col">
          <div>
            <h4>{props.title}</h4>

            <p>{props.category}</p>

            <span style={{ color: "yellow" }}>
              <FaStar /> {props.rate}
            </span>

            <span style={{ color: "#ec6090" }}>
              <FaDownload /> {props.download}
            </span>
          </div>
        </div>

        <div className="third-col">
          <div className="circle">
            <a href="#">
              <span style={{ color: "#ec6090" }}>
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDownloadCard;
