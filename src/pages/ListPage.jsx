import { useState, useEffect } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { FilterBar } from '../components/list/FilterBar';
import { Pagination } from '../components/list/Pagination';
import { CharacterCard } from '../components/home/CharacterCard';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorAlert } from '../components/common/ErrorAlert';

export const ListPage = () => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [filters, setFilters] = useState({ name: '', status: '' });
  const [debouncedName, setDebouncedName] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedName(filters.name);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [filters.name]);

  const { data, loading, error } = useCharacters(page, debouncedName, filters.status);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    if (field === 'status') {
      setPage(1);
    }
  };

  const handleClearFilters = () => {
    setFilters({ name: '', status: '' });
    setPage(1);
  };

  return (
    <div className="list-container">
      <h1 className="page-title">Todos los Personajes</h1>
      
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClear={handleClearFilters}
      />

      {loading && <LoadingSpinner />}
      {error && <ErrorAlert message={error} />}

      {data && (
        <>
          <div className="characters-grid">
            {data.results.map(char => (
              <CharacterCard 
                key={char.id} 
                character={char} 
                onClick={() => {}} 
              />
            ))}
          </div>

          <Pagination
            info={data.info}
            currentPage={page}
            onPageChange={setPage}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={(value) => {
              setItemsPerPage(value);
              setPage(1);
            }}
          />
        </>
      )}
    </div>
  );
};