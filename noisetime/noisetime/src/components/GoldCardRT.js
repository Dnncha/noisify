import { websocketClient } from "polygon.io";
import React from 'react'

class GoldCardRT extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        items: []
      };
    }
  
    // ws = new WebSocket('wss://socket.polygon.io/stocks')
    componentWillMount() {
      
    }

    componentDidMount() {

      const stocksWS = websocketClient("LDOifMNPUBqnm7WNW2vrUI0Wgpufn6xQ");
      
      stocksWS.on("message", raw => {
        const message = JSON.parse(raw);
        switch (message.ev) {
          case "T":
            // console.log(message)
            break;
        }
      });
      
      stocksWS.send({ action: "subscribe", params: "T.MSFT" });

    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="mt-4">XAU ${JSON.stringify(items)}</div>
        );
      }
    }
  }
  
export default GoldCardRT;