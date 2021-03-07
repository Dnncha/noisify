import React from 'react'
import ReactHowler from 'react-howler'
import ReactPlayer from 'react-player'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Slider from 'react-input-slider';
import ls from 'local-storage'
import { FaPlay, FaPause } from 'react-icons/fa'
import Timer from 'react-compound-timer'

class NoiseControl extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      playing: false,
      ding_playing: false,
      loaded: false,
      loop: true,
      mute: false,
      notification_volume: 0.15,
      treble_volume: ls.get('treble_volume') || 0.05,
      bass_volume: ls.get('bass_volume') || 0.10,
      birds_volume: ls.get('birds_volume') || 0.75,
      rain_volume: ls.get('rain_volume') || 0.75,
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleDingEnd = this.handleDingEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleMuteToggle = this.handleMuteToggle.bind(this)
  }


  componentWillUnmount () {
    // this.clearRAF()
  }

  componentDidUpdate () {
    ls.set('treble_volume', this.state.treble_volume)
    ls.set('bass_volume', this.state.bass_volume)
    ls.set('birds_volume', this.state.bass_volume)
    ls.set('rain_volume', this.state.bass_volume)

  }


  handleToggle () {
    this.setState({
      playing: !this.state.playing
    })
  }

  handleDing () {
    this.setState ({
      ding_playing: true
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

  handleDingEnd () {
    this.setState({
      ding_playing: false
    })
  }

  handleOnEnd () {
    this.setState({
      playing: false
    })
  }

  handleStop () {
    this.player.stop()
    this.setState({
      playing: false
    })
  }

  handleMuteToggle () {
    this.setState({
      mute: !this.state.mute
    })
  }


  render () {
    return (
      <div className=''>

          <ReactHowler
          src={['rain.mp3']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          html5={true}
          loop={this.state.loop}
          mute={this.state.mute}
          sprite = {{
            loop: [1075, 15000]
          }}
          volume={this.state.rain_volume}
          ref={(ref) => (this.player = ref)}
        />
        

        <ReactHowler
          src={['ding.mp3']}
          playing={this.state.ding_playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleDingEnd}
          volume={this.state.notification_volume}
          html5={true}
          loop={false}
          sprite = {{
            loop: [0, 5000]
          }}
          mute={this.state.mute}
          ref={(ref) => (this.player = ref)}
        />
        
        {this.state.loaded && 
        <div>
          <div className='volume my-3 container'>
          {/* <div className='my-5'> */}
            {/* <Slider
              axis="x"
              xstep={0.0001}
              xmin={0}
              xmax={1}
              x={this.state.treble_volume}
              onChange={({x}) => this.setState({ treble_volume: parseFloat(x.toFixed(5)) })}
            />
          </div>
          <div className='my-5'>
            <Slider
                  axis="x"
                  xstep={0.0001}
                  xmin={0}
                  xmax={1}
                  x={this.state.bass_volume}
                  onChange={({x}) => this.setState({ bass_volume: parseFloat(x.toFixed(5)) })}
                />
            </div> */}

            {/* <div className='my-5'>
            <Slider
                  axis="x"
                  xstep={0.0001}
                  xmin={0}
                  xmax={1}
                  x={this.state.birds_volume}
                  onChange={({x}) => this.setState({ birds_volume: parseFloat(x.toFixed(5)) })}
                />
            </div> */}

            <div className='my-8'>
            <Slider
                  axis="x"
                  xstep={0.0001}
                  xmin={0}
                  xmax={1}
                  x={this.state.rain_volume}
                  onChange={({x}) => this.setState({ rain_volume: parseFloat(x.toFixed(5)) })}
                />
            </div>
          </div>
          <Button className="text-2xl outline-none" onClick={this.handleToggle}>
            {(this.state.playing) ? <FaPause></FaPause> : <FaPlay></FaPlay>}
          </Button>

          <div className="mt-5">
              <Timer
                    initialTime={4800000}
                    direction="backward"
                    startImmediately={false}
                    checkpoints={[
                      {
                          time: 100,
                          callback: () => this.handleDing(),
                      }
                  ]}
                    onStart={() => this.handleDing()}
                    onStop={() => this.handleDing()}
                    onReset={() => this.handleDing()}
                    onResume={() => this.handleDing()}
                    >
                    {({start, resume, pause, stop, reset, timerState}) => (
                      <React.Fragment>
                        <div className="mb-2 text-gray-400">
                        <Timer.Hours /> minute  <Timer.Minutes /> minute <Timer.Seconds /> seconds
                        </div>
                        
                        <div className="flex gap-4 items-baseline flex-wrap">
                        <Button className="bg-gray-600 py-2 px-4 shadow-lg rounded uppercase font-semibold text-gray-100" onClick={start}>Start</Button>
                        <Button className="bg-gray-600 py-2 px-4 shadow-lg rounded uppercase font-semibold text-gray-100" onClick={pause}>Pause</Button>
                        <Button className="bg-gray-600 py-2 px-4 shadow-lg rounded uppercase font-semibold text-gray-100" onClick={reset}>Reset</Button>
                        </div>
                        </React.Fragment>
                    )}
                </Timer>
              </div>
            
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
