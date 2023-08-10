import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {

  render() {
    const AnimeList = this.props.anime;
    // console.log("ANimeList From List => " ,  AnimeList);
    return <div className="anime-list">
      {AnimeList.map((Anime, index) => (
        <AnimeCard anime={Anime}
          key={index}
        />

      ))}
    </div>;
  }
}

export default AnimeList;
