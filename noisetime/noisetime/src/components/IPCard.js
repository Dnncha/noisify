import React from 'react'

class IPCard extends React.Component {
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
      ("https://api.ipify.org/?format=json")
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
        return <div>Couldn't fetch IP: {error.message}</div>;
      } else if (!isLoaded) {
        return <div></div>;
      } else {
        return (
          <div className="mt-4">Your IP is <div>{items.ip}</div></div>
        );
      }
    }
  }
  
export default IPCard;