function Loading() {
  return (
    <div className="loading-container">
      <div className="text-center">
        {/* Spinner */}
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        
        {/* Loading Message */}
        <p className="text-muted mt-3">
          <i className="bi bi-hourglass-split me-2"></i>
          Loading products...
        </p>
      </div>
    </div>
  )
}

export default Loading;