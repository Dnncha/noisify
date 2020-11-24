import React from 'react'
import { NoiseControl } from './players'
import Timer from 'react-compound-timer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IPCard from './components/IPCard'
import LaunchCount from './components/LaunchCount'
import RiseLoader from 'react-spinners/RiseLoader'

class App extends React.Component {
  render () {
    return (
      <Container className="bg-dark text-light py-5" fluid>
        <Row >
          <Col className="text-center">
            <div className="my-5">
              <RiseLoader
              size={50}
              height={40}
              margin={50}
              color={"#5a636d"}
              ></RiseLoader>
            </div>
            <h1 className='title my-3'>Noisify</h1>
            <NoiseControl className="mt-3 mb-3" />
            <IPCard></IPCard>
            <div className="mt-5">
              <Timer
                    initialTime={1200000}
                    direction="backward"
                    >
                    {() => (
                      <React.Fragment>
                            20 minute burndown: <Timer.Minutes /> minute <Timer.Seconds /> seconds
                        </React.Fragment>
                    )}
                </Timer>
              </div>
              <LaunchCount></LaunchCount>
              <Timer>
                This session: <Timer.Minutes /> minutes <Timer.Seconds /> seconds
              </Timer>
            <p className="mt-3">A deep work tool made by <a href="https://focalise.ie">Focalise</a></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
