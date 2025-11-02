export const CharacterCard = ({ character, onClick }) => (
  <div onClick={onClick} className="character-card">
    <img
      src={character.image}
      alt={character.name}
      className="character-image"
    />
    <div className="character-info">
      <h3 className="character-name">{character.name}</h3>
      <div className="character-details">
        <p className="character-detail">
          <span className="character-label">Estado:</span>{' '}
          <span className={character.status === 'Alive' ? 'status-alive' : 'status-dead'}>
            {character.status}
          </span>
        </p>
        <p className="character-detail">
          <span className="character-label">Especie:</span> {character.species}
        </p>
      </div>
    </div>
  </div>
);