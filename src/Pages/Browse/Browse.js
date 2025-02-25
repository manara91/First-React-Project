import "./Browse.css";
import service01 from "../../assets/images/service-01.jpg";
import service02 from "../../assets/images/service-02.jpg";
import service03 from "../../assets/images/service-03.jpg";

import {
  SectionWrapper,
  SectionHeader,
  PrimaryButton,
} from "../../Components/index";

import { TopDownload, FeaturedGames, LiveStream } from "../../sections/index";

const Browse = () => {
  return (
    <div>
      <div className="row browse">
        <div className="col-lg-8 fearured-games-cards">
          <FeaturedGames />
        </div>
        <div className="col-lg-4">
          <TopDownload />
        </div>
      </div>

      <SectionWrapper>
        <div className="how-start-header">
          <SectionHeader>How To Start Your Live Stream</SectionHeader>
        </div>

        <div className="how-start-content">
          <div className="how-start-item">
            <img src={service01}></img>
            <h4>Go To Your Profile</h4>
            <p>
              Cyborg Gaming is free HTML CSS website template provided by
              TemplateMo. This is Bootstrap v5.2.0 layout.
            </p>
          </div>
          <div className="how-start-item">
            <img src={service02}></img>
            <h4>Live Stream Button</h4>
            <p>
              If you wish to support us, you can make a small contribution via
              PayPal to info [at] templatemo.com
            </p>
          </div>
          <div className="how-start-item">
            <img src={service03}></img>
            <h4>You Are Live</h4>
            <p>
              You are not allowed to redistribute this template's downloadable
              ZIP file on any other template collection website.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <div className="pop-btn">
        <PrimaryButton> Go to Profile </PrimaryButton>
      </div>

      <LiveStream />
    </div>
  );
};

export default Browse;
