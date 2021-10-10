import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function WrapList() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Mishri");
  const [currentPlayer, setCurrentPlayer] = useState([]);
  // const [videoID, setVideoID] = useState("CMNry4PE93Y");

  // const current = (e) => {
  //   e;
  // };
  const getSongs = async () => {
    axios
      .get(`http://localhost:3000/${query}`)
      .then((res) => {
        setSongs(res.data.content);
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(query);
  useEffect(() => {
    getSongs();
  }, [query]);
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="left">
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
            value={search}
            onChange={updateSearch}
          />
          <button onClick={getSearch} type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="wrap-list">
          {songs.map((song) => (
            <Songs
              // onClick={setCurrentPlayer(this)}
              songName={song.name}
              artistName={song.album.name}
              thumbnail={song.thumbnails[0].url}
            />
          ))}
        </div>
      </div>
      <div class="record-vending-slot"></div>
    </div>
  );
}

function Songs(props) {
  return (
    <div className="song">
      <div className="song-text">
        <p>
          <b className="song-text">{props.songName}</b>
        </p>
        <p>
          <b className="song-text">{props.artistName}</b>
        </p>
      </div>
      <img src={props.thumbnail} className="record-img" />
    </div>
  );
}

export default WrapList;
