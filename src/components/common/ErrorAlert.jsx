export const ErrorAlert = ({ message }) => (
  <div className="error-alert">
    <div className="error-icon">⚠️</div>
    <div>
      <h3 className="error-title">Error</h3>
      <p className="error-message">{message}</p>
    </div>
  </div>
);