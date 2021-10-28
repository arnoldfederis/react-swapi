const Pagination = ({ onSetPage, page, hasNext }) => {
  return (
    <div className="d-flex align-items-center justify-content-end">
      <button
        className="btn btn-primary btn-sm"
        disabled={page <= 1}
        onClick={() => {
          onSetPage(page - 1)
        }}>
        Previous
      </button>
      &nbsp;
      <button
        className="btn btn-primary btn-sm"
        disabled={!hasNext}
        onClick={() => {
          onSetPage(page + 1)
        }}>
        Next
      </button>
    </div>
  )
}

export default Pagination
