import React from 'react'
import ReactHowler from 'react-howler'
import raf from 'raf' // requestAnimationFrame polyfill
import Button from 'react-bootstrap/Button'
import { Howl } from 'howler';
import Spinner from 'react-bootstrap/Spinner'

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
      volume: 0.15,
      seek: 0.0,
      isSeeking: false,
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handleOnLoad = this.handleOnLoad.bind(this)
    this.handleOnEnd = this.handleOnEnd.bind(this)
    this.handleOnPlay = this.handleOnPlay.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.renderSeekPos = this.renderSeekPos.bind(this)
    this.handleLoopToggle = this.handleLoopToggle.bind(this)
    this.handleMuteToggle = this.handleMuteToggle.bind(this)
    this.handleMouseDownSeek = this.handleMouseDownSeek.bind(this)
    this.handleMouseUpSeek = this.handleMouseUpSeek.bind(this)
    this.handleSeekingChange = this.handleSeekingChange.bind(this)

    
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
    this.renderSeekPos()
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
    this.renderSeekPos()
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

  handleMouseDownSeek () {
    this.setState({
      isSeeking: true
    })
  }

  handleMouseUpSeek (e) {
    this.setState({
      isSeeking: false
    })

    this.player.seek(e.target.value)
  }

  handleSeekingChange (e) {
    this.setState({
      seek: parseFloat(e.target.value)
    })
  }

  renderSeekPos () {
    if (!this.state.isSeeking) {
      this.setState({
        seek: this.player.seek()
      })
    }
    if (this.state.playing) {
      this._raf = raf(this.renderSeekPos)
    }
  }

  clearRAF () {
    raf.cancel(this._raf)
  }


  render () {
    return (
      <div className='noise-control'>
        <ReactHowler
          src={['noise.mp3']}
          playing={this.state.playing}
          onLoad={this.handleOnLoad}
          onPlay={this.handleOnPlay}
          onEnd={this.handleOnEnd}
          loop={this.state.loop}
          mute={this.state.mute}
          volume={this.state.volume}
          ref={(ref) => (this.player = ref)}
        />
        
        {this.state.loaded && 
        <div>
          <div className='volume'>
            <label>
              Volume:
                <input
                class='form-control-range input-lg'
                  type='range'
                  min='0'
                  max='1'
                  step='.01'
                  value={this.state.volume}
                  onChange={e => this.setState({ volume: parseFloat(e.target.value) })}
                />
            </label>
          </div>
          <Button variant="outline-primary" size="lg" onClick={this.handleToggle}>
            {(this.state.playing) ? 'Pause' : 'Start Noise'}
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
