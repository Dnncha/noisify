import React from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Slider from 'react-input-slider';
import ls from 'local-storage'
import { FaPlay, FaPause } from 'react-icons/fa'
// import Howl from ''

class NoiseControl extends React.Component {
  constructor (props) {
    super(props)

    // this.noise = new Howl({
    //   src: ["noise.mp3"],
    //   sprite: {
    //     loop: [100, 2000, true]      
    //   }
    // })

    // this.noise.play('loop')


    
    this.state = {
      playing: false,
      loaded: false,
      loop: true,
      mute: false,
      treble_volume: ls.get('treble_volume') || 0.0,
      bass_volume: ls.get('bass_volume') || 0.33,
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

  componentDidUpdate () {
    ls.set('treble_volume', this.state.treble_volume)
    ls.set('bass_volume', this.state.bass_volume)
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
      // playing: 'loop'
      playing: true
    })
  }

  handleOnEnd () {
    this.setState({
      // playing: false
    })
    this.clearRAF()
  }

  handleStop () {
    this.player.stop()
    this.setState({
      playing: false
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
          src={['bass_noise.webm']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          // html5={true}
          volume={this.state.bass_volume}
          sprite = {{
            loop: [600, 7000, true]
          }}
          ref={(ref) => (this.player = ref)}
        />
        <ReactHowler
          src={['treble_noise.webm']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          // html5={true}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.treble_volume}
          sprite = {{
            loop: [500, 6050, true]
          }}
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
          <Button variant="outline-light" className="mb-5" size="lg" onClick={this.handleToggle}>
            {(this.state.playing) ? <FaPause></FaPause> : <FaPlay></FaPlay>}
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
