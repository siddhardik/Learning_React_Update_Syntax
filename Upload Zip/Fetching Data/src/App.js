import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then(data => data.json())
      .then(data => this.setState(
        { photos: data,
          loading:true
        }
        ));
  }

  render() {
    // Display loading status here
    if(!this.state.loading){
      return (<div>Loading...</div>);
    }
   
    return (
      <div className="App">
      {this.state.photos.map((photo) => {
        return <Image  key={photo.id} photo={photo} />;
      })}
    </div>
      
    );
  }
}
