import './HomeTilesSection.scss';

import {
  HomeTileBlockchain,
  HomeTileDashboard,
  HomeTileProtect,
  HomeTileUserData,
} from './Tiles';

const HomeTilesSection = () => {
  return (
    <div className="home-tiles-section">
      <div className="home-tiles-section__wrapper container">
        <div className="home-tiles-section__header">
          <HomeTileProtect />
          <HomeTileBlockchain />
        </div>
        <div className="home-tiles-section__footer">
          <HomeTileUserData />
          <HomeTileDashboard />
        </div>
      </div>
    </div>
  );
};

export default HomeTilesSection;
