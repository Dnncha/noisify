import React from 'react'

class GoldCard extends React.Component {
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
      ("https://www.goldapi.io/api/XAU/USD/", {
      method: 'get',
      headers: new Headers({
        'x-access-token': 'goldapi-132ilzukhxymgk2-io',
        'Content-Type': 'application/json'
      }),
      })
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
          <div className="mt-4">XAU ${items.price}</div>
        );
      }
    }
  }
  
export default GoldCard;