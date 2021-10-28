import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AppNavBar = () => {
  return (
    <Navbar className="shadow-sm">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img
              alt=""
              src="/logo.png"
              className="d-inline-block align-top"
              width="100"
            />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default AppNavBar
