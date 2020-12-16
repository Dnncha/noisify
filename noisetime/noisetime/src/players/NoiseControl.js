import React from 'react'
import ReactHowler from 'react-howler'
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
      loop: false,
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
      <div className='noise-control'>


        {/* <ReactHowler
          src={['treble_noise.webm']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          html5={true}
          // loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.treble_volume}
          sprite = {{
            loop: [100, 6000, true]
          }}
          ref={(ref) => (this.player = ref)}
        />


        <ReactHowler
          src={['bass_noise.webm']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          // loop={this.state.loop}
          mute={this.state.mute}
          html5={true}
          volume={this.state.bass_volume}
          sprite = {{
            loop: [297, 4500, true]
          }}
          ref={(ref) => (this.player = ref)}
        /> */}

        <ReactHowler
          src={['birds.mp3']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          html5={true}
          // loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.birds_volume}
          sprite = {{
            loop: [100, 300000, true]
          }}
          ref={(ref) => (this.player = ref)}
        />

          <ReactHowler
          src={['rain.mp3']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          html5={true}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.rain_volume}
          sprite = {{
            loop: [100, 300000, true]
          }}
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

            <div className='my-5'>
            <Slider
                  axis="x"
                  xstep={0.0001}
                  xmin={0}
                  xmax={1}
                  x={this.state.birds_volume}
                  onChange={({x}) => this.setState({ birds_volume: parseFloat(x.toFixed(5)) })}
                />
            </div>

            <div className='my-5'>
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
          <Button variant="outline-light" className="mb-5" size="lg" onClick={this.handleToggle}>
            {(this.state.playing) ? <FaPause></FaPause> : <FaPlay></FaPlay>}
          </Button>

          <div className="mt-5">
              <Timer
                    initialTime={2400000}
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
                        <h5>TIMER</h5>
                        <div className="mb-2">
                          <Timer.Minutes /> minute <Timer.Seconds /> seconds
                        </div>
                        
                        <Button variant="outline-light mx-1" onClick={start}>Start</Button>
                        <Button variant="outline-light mx-1" onClick={pause}>Pause</Button>
                        <Button variant="outline-light mx-1" onClick={reset}>Reset</Button>
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
