import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/actions/starship'
import { Card, Col } from 'react-bootstrap'
import { FaIndustry, FaStar } from 'react-icons/all'
import AppPagination from '../components/AppPagination'
import AppLoader from '../components/AppLoader'

const Home = () => {
  const { starships, hasNext, isLoading } = useSelector(state => state.starship)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData(page))
  }, [page])

  return (
    <>
      {isLoading ? <AppLoader /> : (
        <>
          {starships.length > 0 && starships.map(starship => (
            <>
              <Col lg={6} key={starship.model}>
                <Card className="mb-5 shadow rounded-3 border-0">
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="card-title fw-bold mb-0">{starship.name}</h3>
                      <div className="d-flex align-items-center">
                        <FaStar color="red" />
                        &nbsp;
                        {starship.hyperdrive_rating === 'unknown' ? 0 : starship.hyperdrive_rating}
                      </div>
                    </div>
                    <p><FaIndustry /> {starship.manufacturer}</p>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
          <AppPagination page={page} onSetPage={setPage} hasNext={hasNext} />
        </>
      )}

      {!isLoading && starships.length === 0 && <div className="text-center fw-bold">No records found.</div>}
    </>
  )
}

export default Home
