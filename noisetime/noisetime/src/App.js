import React from 'react'
import ParticleImage, { ParticleOptions, forces, ParticleForce } from "react-particle-image";
import { NoiseControl } from './players'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import IPCard from './components/IPCard'
import ReactHowler from 'react-howler'
import LaunchCount from './components/LaunchCount'
import Button from 'react-bootstrap/Button'
import {  BrowserView, IOSView } from "react-device-detect";

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
                scale={.3}
                entropy={470}
                maxParticles={200}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                width={1000}
                height={500}
                backgroundColor={"#343a40"}
              />
            </div>
            </BrowserView>

            <h1 className='title my-3'>Noisify</h1>
            <p Style={"opacity:0.4"}>Drown out the noise with more noise</p>
            <NoiseControl className="mt-3 mb-3" />
            <IOSView>Protip: Noisify doesn't work on iOS if silent mode is enabled.</IOSView>
            
            <LaunchCount></LaunchCount>
            {/* <GoldCard></GoldCard> */}
            <IPCard></IPCard>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
