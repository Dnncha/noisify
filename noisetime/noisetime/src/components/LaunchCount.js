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
        <div className="my-8"><p>Get more done with <strong>Noisify™</strong> premium-grade white noise generator.</p>
        <p class="text-gray-400 text-sm">Noisify has successfully launched {items.value} times.</p>
        </div>
          );
      }
    }
  }
  
export default LaunchCount;