import React from 'react'
import { AiOutlineReload } from 'react-icons/ai'

class GoldCard extends React.Component {
    constructor(props) {
      super(props);
      this.get_price = this.get_price.bind(this)
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    get_price() {
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
  
    componentDidMount() {
      this.get_price()
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
          <div className="mt-4">XAU ${items.price}</div>
          <button className='btn btn-default' onClick={this.get_price}><AiOutlineReload/></button>
          </div>
        );
      }
    }
  }
  
export default GoldCard;