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
import GoldCard from './components/GoldCard'
// import GoldCardRT from './components/GoldCardRT'
import LaunchCount from './components/LaunchCount'
import ReactGA from 'react-ga'
ReactGA.initialize('G-49CPNXEPEK');
ReactGA.pageview(window.location.pathname + window.location.search);
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b < 10;
  },
  color: ({ x, y, image }) => "white",
  radius: () => Math.random() * 1.5 + 0.2
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 140);
};



class App extends React.Component {
  render () {
    return (
      <Container className="bg-dark text-light py-5" fluid>
        <Row >
          <Col className="text-center">
          <BrowserView>

            <div>
              <ParticleImage
                src={"/noise.png"}
                scale={.5}
                entropy={270}
                maxParticles={2000}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                width={1000}
                height={600}
                backgroundColor={"#343a40"}
              />
            </div>
            </BrowserView>

            <h1 className='title my-3'>Noisify</h1>
            <p Style={"opacity:0.4"}>Drown out the noise with more noise</p>
            <NoiseControl className="mt-3 mb-3" />
            <GoldCard></GoldCard>
            {/* <GoldCardRT></GoldCardRT> */}

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
