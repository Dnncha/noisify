import React from 'react'
import { NoiseControl } from './players'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IPCard from './components/IPCard'
import LaunchCount from './components/LaunchCount'

class App extends React.Component {
  render () {
    return (
      <Container className="bg-dark text-light" fluid>
        <Row >
          <Col className="text-center">
            <h1 className='title my-3'>Noisify</h1>
            <NoiseControl className="mt-3 mb-3" />
            <IPCard></IPCard>
            <LaunchCount></LaunchCount>
            <p className="mt-3">A deep work tool made by <a href="https://focalise.ie">Focalise</a></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
