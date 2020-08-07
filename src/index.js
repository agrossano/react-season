import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    //l'unica volta in cui si assegna direttamene una proprietà a this.state (vedi sotto 'setState)
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //chiamo setState per aggiornare lo stato
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
