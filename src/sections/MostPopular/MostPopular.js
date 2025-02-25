import "./MostPopular.css";

import {
  PrimaryButton,
  SectionHeader,
  SectionWrapper,
} from "../../Components/index";
import {MostPopularCard} from "../../Cards/index"
import mostPopularData from "../../Data/MostPopularData";

const MostPopular = () => {
  const cards = mostPopularData.map((card) => {
    return (
      <MostPopularCard
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader> Most Popular </SectionHeader>

        <div className="most-popular-items">
        
          {cards}
        
        </div>
      </SectionWrapper>
      <div className="pop-btn">
        <PrimaryButton>Discover Popular</PrimaryButton>
      </div>
     
    </>
  );
};

export default MostPopular;
