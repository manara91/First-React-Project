import "./FeaturedGames.css";

import { SectionWrapper, SectionHeader } from "../../Components/index";
import { FeaturedGamesCard } from "../../Cards/index";
import featuredGame from "../../Data/FeaturedGame";

const FeaturedGames = () => {
  const featuredGamescards = featuredGame.map((card) => {
    return (
      <FeaturedGamesCard
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
        <SectionHeader> Featured Games </SectionHeader>

        <div className="featured-games-items">{featuredGamescards}</div>
      </SectionWrapper>
    </>
  );
};

export default FeaturedGames;
