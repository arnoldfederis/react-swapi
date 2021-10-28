import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import AppNavBar from './components/AppNavBar'
import NotFound from './views/errors/NotFound'
import Home from './views/Home'

import { Alert, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const App = () => {
  const { variant, showAlert, message } = useSelector(state => state.app.alert)

  return (
    <BrowserRouter basename="/react-swapi">
      <main className="app">
        <AppNavBar />
        <div className="p-3">
          <Container>
            <Row>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/404-page-not-found">
                  <NotFound />
                </Route>
                <Route path="*">
                  <Redirect to="/404-page-not-found" />
                </Route>
              </Switch>
            </Row>
          </Container>
        </div>

        {showAlert && (
          <Alert variant={variant}>
            <p className="mb-0 fw-bold">{message}</p>
          </Alert>
        )}

      </main>
    </BrowserRouter>
  )
}

export default App
