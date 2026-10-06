function displayValue(value) {
  if (value === null || value === undefined || value === '') {
    return '—'
  }

  if (Array.isArray(value)) {
    return value.map(displayValue).join(', ')
  }

  if (typeof value === 'object') {
    return value.name ?? value.username ?? value._id ?? value.id ?? JSON.stringify(value)
  }

  return String(value)
}

export default function CollectionTable({ columns, collection, error, loading, title }) {
  return (
    <section aria-labelledby="collection-title">
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-2 mb-4">
        <div>
          <p className="text-uppercase text-success fw-semibold small mb-1">OctoFit Tracker</p>
          <h1 className="h2 mb-0" id="collection-title">{title}</h1>
        </div>
        {!loading && !error && (
          <span className="badge rounded-pill text-bg-light border">
            {collection.length} {collection.length === 1 ? 'record' : 'records'}
          </span>
        )}
      </div>

      {loading && (
        <div className="d-flex align-items-center gap-2 text-body-secondary" role="status">
          <span className="spinner-border spinner-border-sm" aria-hidden="true" />
          Loading {title.toLowerCase()}…
        </div>
      )}

      {error && (
        <div className="alert alert-danger" role="alert">
          <strong>Could not load {title.toLowerCase()}.</strong> {error}
        </div>
      )}

      {!loading && !error && collection.length === 0 && (
        <div className="alert alert-light border" role="status">
          No {title.toLowerCase()} found.
        </div>
      )}

      {!loading && !error && collection.length > 0 && (
        <div className="table-responsive rounded-3 border bg-white shadow-sm">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                {columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {collection.map((record, index) => (
                <tr key={record._id ?? record.id ?? index}>
                  {columns.map((column) => (
                    <td key={column.key}>
                      {displayValue(column.render ? column.render(record) : record[column.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
