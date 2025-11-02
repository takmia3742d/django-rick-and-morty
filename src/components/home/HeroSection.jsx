export const HeroSection = ({ onExplore }) => (
  <div className="hero">
    <div className="hero-content">
      <h1 className="hero-title">Rick and Morty Explorer</h1>
      <p className="hero-description">
        Descubre todos los personajes del multiverso de Rick and Morty
      </p>
      <button onClick={onExplore} className="hero-button">
        Explorar Personajes
      </button>
    </div>
  </div>
);