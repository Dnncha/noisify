import React from 'react'
import SourceLink from './components/SourceLink'
import { OnlyPlayPauseButton, NoPreload, SwapSource, AutoPlay, FullControl } from './players'
import ReactHowler from 'react-howler'



class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1 className='title'>Noise Time</h1>
          <FullControl />
          <section>
            <h1>Global Howler Object</h1>
            <p>usingWebAudio: {(window.Howler.usingWebAudio) ? 'true' : 'false'}</p>
            <pre>window.Howler.usingWebAudio</pre>
          </section>
      </div>
    )
  }
}

export default App
