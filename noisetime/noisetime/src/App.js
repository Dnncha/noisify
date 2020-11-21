import React from 'react'
import { NoiseControl } from './players'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class App extends React.Component {
  render () {
    return (
      <Container>
        <Row >
          <Col className="text-center">
            <h1 className='title my-3'>Noisify</h1>
            <NoiseControl className="mt-3 mb-3" />
            <p className="mt-3">A deep work tool made by <a href="https://focalise.ie">Focalise</a></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
