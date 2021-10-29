import { useDispatch } from 'react-redux'
import { SET_IS_LOADING } from '../store/types'

const Pagination = ({ onSetPage, page, hasNext }) => {
  const dispatch = useDispatch()

  const scrollToTop = () => {
    dispatch({
      type: SET_IS_LOADING,
      payload: true
    })

    window.scrollTo(0, 0)
  }

  return (
    <div className="d-flex align-items-center justify-content-end">
      <button
        className="btn btn-primary btn-sm"
        disabled={page <= 1}
        onClick={() => {
          onSetPage(page - 1)
          scrollToTop()
        }}>
        Previous
      </button>
      &nbsp;
      <button
        className="btn btn-primary btn-sm"
        disabled={!hasNext}
        onClick={() => {
          onSetPage(page + 1)
          scrollToTop()
        }}>
        Next
      </button>
    </div>
  )
}

export default Pagination
