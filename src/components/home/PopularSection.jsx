import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { CharacterCard } from './CharacterCard';
import { LoadingSpinner } from '../common/LoadingSpinner';

export const PopularSection = ({ onNavigate }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const data = await api.getPopularCharacters();
        setCharacters(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPopular();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="popular-section">
      <h2 className="section-title">Personajes Populares</h2>
      <div className="characters-grid">
        {characters.map(char => (
          <CharacterCard 
            key={char.id} 
            character={char} 
            onClick={() => onNavigate('list')} 
          />
        ))}
      </div>
    </div>
  );
};