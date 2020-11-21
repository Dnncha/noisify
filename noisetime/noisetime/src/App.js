import React from 'react'
import { NoiseControl } from './players'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class IPCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch
    ("https://api.ipify.org/?format=json")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },

      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class="mt-4">Your IP is {items.ip}</div>
      );
    }
  }
}



class App extends React.Component {
  render () {
    return (
      <Container>
        <Row >
          <Col className="text-center">
            <h1 className='title my-3'>Noisify</h1>
            <NoiseControl className="mt-3 mb-3" />
            <IPCard></IPCard>
            <p className="mt-3">A deep work tool made by <a href="https://focalise.ie">Focalise</a></p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
