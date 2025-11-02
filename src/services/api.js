const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const api = {
  // Obtener personajes con filtros y paginación
  getCharacters: async (page = 1, name = '', status = '') => {
    try {
      const params = new URLSearchParams();
      if (page) params.append('page', page);
      if (name) params.append('name', name);
      if (status) params.append('status', status);
      
      const response = await fetch(`${API_BASE_URL}/character?${params}`);
      
      if (!response.ok) {
        throw new Error('Error al cargar personajes');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
  
  // Obtener personajes populares (los primeros 8)
  getPopularCharacters: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/character/1,2,3,4,5,6,7,8`);
      
      if (!response.ok) {
        throw new Error('Error al cargar personajes populares');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
};