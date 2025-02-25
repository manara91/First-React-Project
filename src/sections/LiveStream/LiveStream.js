import "./LiveStream.css";

import LiveStreamData from "../../Data/LiveStreamData";
import { LiveStreamCard } from "../../Cards/index";
import {
  PrimaryButton,
  SectionHeader,
  SectionWrapper,
} from "../../Components/index";

const LiveStream = () => {
  const liveStreamCards = LiveStreamData.map((card) => {
    return (
      <LiveStreamCard
        key={card.id}
        gameImage={card.gameImage}
        playerImage={card.playerImage}
        playerName={card.playerName}
        dis={card.dis}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular Live Stream</SectionHeader>

        <div className="live-stream-items">{liveStreamCards}</div>
      </SectionWrapper>
      <div className="pop-btn">
        <PrimaryButton>Discover All Streams</PrimaryButton>
      </div>
    </>
  );
};

export default LiveStream;
