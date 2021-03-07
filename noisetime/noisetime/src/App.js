import React from 'react'
import ParticleImage, { ParticleOptions, forces, ParticleForce } from "react-particle-image";
import { NoiseControl } from './players'
// import 'bootstrap/dist/css/bootstrap.min.css';
import LaunchCount from './components/LaunchCount'
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
      <div className="bg-gray-800">
      <div className="text-gray-200 py-5 container mx-auto">
          <BrowserView>
            <div className="flex place-content-center">
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
                backgroundColor={"#1f2a37"}
              />
            </div>
            </BrowserView>

            <h1 className='title my-3 text-6xl font-bold text-gray-100'>Noisify</h1>
            <p className='text-gray-200 text-xl'>Drown out the noise with more noise</p>
            <NoiseControl className="my-8"/>
            <IOSView>Protip: Noisify doesn't work on iOS if silent mode is enabled.</IOSView>
            
            <LaunchCount></LaunchCount>

      </div>
      </div>
    )
  }
}

export default App
