export const Pagination = ({ info, currentPage, onPageChange, itemsPerPage, onItemsPerPageChange }) => {
  if (!info) return null;

  const totalPages = info.pages;

  return (
    <div className="pagination">
      <div className="pagination-content">
        <div className="pagination-info">
          Página {currentPage} de {totalPages} ({info.count} personajes totales)
        </div>

        <div className="pagination-controls">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!info.prev}
            className="pagination-button"
          >
            ←
          </button>

          <span className="pagination-current">{currentPage}</span>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!info.next}
            className="pagination-button"
          >
            →
          </button>
        </div>

        <div className="pagination-selector">
          <label>Items por página:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="pagination-select"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>
    </div>
  );
};