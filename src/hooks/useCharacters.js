import { useState, useEffect } from 'react';
import { api } from '../services/api';

export const useCharacters = (page, name, status) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await api.getCharacters(page, name, status);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, name, status]);

  return { data, loading, error };
};