import "./GamingLibrary.css";
import {
  SectionHeader,
  SectionWrapper,
  PrimaryButton,
} from "../../Components/index";

import { GamingLibraryCard } from "../../Cards/index";

import gamingLibraryData from "../../Data/GamingLibraryData";

const GamingLibrary = () => {
  const cards = gamingLibraryData.map((card) => {
    return (
      <GamingLibraryCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        date_added={card.date_added}
        hours_played={card.hours_played}
        downloaded={card.downloaded}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader> Gaming Library </SectionHeader>

        <div className="gaming-library-cards">{cards}</div>
      </SectionWrapper>
      <div className="pop-btn">
        <PrimaryButton>View Your Library</PrimaryButton>
      </div>
    </>
  );
};

export default GamingLibrary;
