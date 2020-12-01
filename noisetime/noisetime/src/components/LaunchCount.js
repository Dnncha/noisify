import React from 'react'

class LaunchCount extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch
      ("https://api.countapi.xyz/hit/noisify/visits")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
  
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div className="mt-5"><p>Get more done with the <strong>Noisify™</strong> premium-grade white noise generator.</p>
        <p className="mt-3">Noisify is a deep work tool made by <a href="https://focalise.ie">Focalise</a></p>
        <p>Noisify has successfully launched {items.value} times. It's a world record for white noise generators of this particular breed.</p>
        </div>
          );
      }
    }
  }
  
export default LaunchCount;