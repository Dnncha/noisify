import React from 'react'
import ParticleImage, { ParticleOptions,
  forces,
  ParticleForce } from "react-particle-image";
import { NoiseControl } from './players'
import Timer from 'react-compound-timer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IPCard from './components/IPCard'
import LaunchCount from './components/LaunchCount'
import RiseLoader from 'react-spinners/RiseLoader'
import ReactGA from 'react-ga';
ReactGA.initialize('G-49CPNXEPEK');
ReactGA.pageview(window.location.pathname + window.location.search);


const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b < 10;
  },
  color: ({ x, y, image }) => "white"
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 40);
};




class App extends React.Component {
  render () {
    return (
      <Container className="bg-dark text-light py-5" fluid>
        <Row >
          <Col className="text-center">
            <div className="my-5">
            <ParticleImage
              src={"/noise.png"}
              scale={.5}
              entropy={70}
              maxParticles={4000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              width={1000}
              height={500}
              backgroundColor={"#343a40"}
            />
              
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
