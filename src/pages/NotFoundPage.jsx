export const NotFoundPage = ({ onNavigate }) => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Página no encontrada</p>
        <button onClick={() => onNavigate('home')} className="not-found-button">
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};