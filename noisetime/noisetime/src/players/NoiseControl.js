import React, { useState } from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import Button from 'react-bootstrap/Button'
// import { Howl } from 'howler';
import Spinner from 'react-bootstrap/Spinner'
import Slider from 'react-input-slider';


class NoiseControl extends React.Component {
  constructor (props) {
    super(props)

    // this.noise = new Howl({
    //   src: ["noise.mp3"],
    //   sprite: {
    //     loop: [100, 2000, true]      
    //   }
    // })

    this.state = {
      playing: false,
      loaded: false,
      loop: true,
      mute: false,
      treble_volume: 0.0,
      bass_volume: 0.33,
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleLoopToggle = this.handleLoopToggle.bind(this)
    this.handleMuteToggle = this.handleMuteToggle.bind(this)
  }

  

  componentWillUnmount () {
    this.clearRAF()
  }


  handleToggle () {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleOnLoad () {
    this.setState({
      loaded: true,
      duration: this.player.duration()
    })
  }

  handleOnPlay () {
    this.setState({
      playing: true
    })
  }

  handleOnEnd () {
    this.setState({
      playing: false
    })
    this.clearRAF()
  }

  handleStop () {
    this.player.stop()
    this.setState({
      playing: false // Need to update our local state so we don't immediately invoke autoplay
    })
  }

  handleLoopToggle () {
    this.setState({
      loop: !this.state.loop
    })
  }

  handleMuteToggle () {
    this.setState({
      mute: !this.state.mute
    })
  }

  clearRAF () {
    raf.cancel(this._raf)
  }


  render () {
    return (
      <div className='noise-control'>
        <ReactHowler
          src={['bass_noise.mp3']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          // onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.bass_volume}
          ref={(ref) => (this.player = ref)}
        />
        <ReactHowler
          src={['treble_noise.mp3']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          // onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.treble_volume}
          ref={(ref) => (this.player = ref)}
        />
        
        {this.state.loaded && 
        <div>
          <div className='volume my-3 container'>
          <div className='my-4'>
              <Slider
              axis="x"
              xstep={0.0001}
              xmin={0}
              xmax={1}
              x={this.state.treble_volume}
              onChange={({x}) => this.setState({ treble_volume: parseFloat(x.toFixed(5)) })}
            />
          </div>
          <div className='my-4'>
            <Slider
                  axis="x"
                  xstep={0.0001}
                  xmin={0}
                  xmax={1}
                  x={this.state.bass_volume}
                  onChange={({x}) => this.setState({ bass_volume: parseFloat(x.toFixed(5)) })}
                />
            </div>
          </div>
          <Button variant="outline-primary" size="lg" onClick={this.handleToggle}>
            {(this.state.playing) ? 'Stop Noise' : 'Start Noise'}
          </Button>
        </div>
        }

      {!this.state.loaded && 
           <Spinner
          as="span"
          animation="border"
          size="lg"
          role="status"
          aria-hidden="true"
        />
        }

      </div>
    )
  }
}

export default NoiseControl
