import "./GamingLibraryCard.css";

import { SecondaryButton } from "../../Components/index";

const GamingLibraryCard = (props) => {
  return (
    <div className="gaming-library-card">
      <ul>
        <li>
          <img src={props.image} />
        </li>

        <li>
          <h4>{props.title}</h4>
          <span className="item-category">{props.category}</span>
        </li>

        <li>
          <h4>Date Added</h4>
          <span className="item-category">{props.date_added}</span>
        </li>

        <li>
          <h4>Hours Played</h4>
          <span className="item-category">{props.hours_played}</span>
        </li>

        <li>
          <h4>Currently</h4>
          <span className="item-category">{props.downloaded}</span>
        </li>

        <SecondaryButton>Download</SecondaryButton>
      </ul>
    </div>
  );
};

export default GamingLibraryCard;
