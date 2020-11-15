import React from 'react'
import { NoiseControl } from './players'
import ReactHowler from 'react-howler'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class App extends React.Component {
  render () {
    return (
      <Container>
        <Row >
          <Col>
            <h1 className='title'>Noisify</h1>
            <NoiseControl />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
