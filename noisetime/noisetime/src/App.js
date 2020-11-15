import React from 'react'
import { NoiseControl } from './players'
import ReactHowler from 'react-howler'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Alert'




class App extends React.Component {
  render () {
    return (
      <Container>
        <h1 className='title'>Noise Time</h1>
          <NoiseControl />
      </Container>
    )
  }
}

export default App
