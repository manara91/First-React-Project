import "./TopDownload.css";

import { SectionWrapper, SectionHeader } from "../../Components/index";
import { TopDownloadCard } from "../../Cards/index";
import mostPopularData from "../../Data/MostPopularData";

const TopDownload = () => {
  const topDownloadcards = mostPopularData.map((card) => {
    return (
      <TopDownloadCard
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
        <SectionHeader> Top Downloaded </SectionHeader>

        <div className="top-Downloaded-items">
          {topDownloadcards[7]}
          {topDownloadcards[0]}
          {topDownloadcards[5]}

          <div className="view-all-games">
            {" "}
            <a href="#/">View All Games</a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default TopDownload;
