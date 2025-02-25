import "./LiveStreamCard.css";
import { FaCheckCircle } from "react-icons/fa";

const LiveStreamCard = (props) => {
  return (
    <>
      <div className="live-stream-item">
        <div className="live-stream-wrapper">
          <img className="game-img" src={props.gameImage} />

          <div className="live-stream-content">
            <div>
              <img className="player-img" src={props.playerImage} />
            </div>
            <div>
              <h4 className="player-name">
                {" "}
                <span>
                  <FaCheckCircle />{" "}
                </span>
                {props.playerName}
              </h4>
              <p className="discription">{props.dis}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveStreamCard;
