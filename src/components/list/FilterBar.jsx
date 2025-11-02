export const FilterBar = ({ filters, onFilterChange, onClear }) => (
  <div className="filter-bar">
    <div className="filter-grid">
      <div className="filter-group">
        <label className="filter-label">🔍 Buscar por nombre</label>
        <input
          type="text"
          value={filters.name}
          onChange={(e) => onFilterChange('name', e.target.value)}
          placeholder="Ej: Rick, Morty..."
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label className="filter-label">Estado</label>
        <select
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
          className="filter-select"
        >
          <option value="">Todos</option>
          <option value="alive">Vivo</option>
          <option value="dead">Muerto</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      <div className="filter-group">
        <button onClick={onClear} className="filter-clear-button">
          Limpiar Filtros
        </button>
      </div>
    </div>
  </div>
);