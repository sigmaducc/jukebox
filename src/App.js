import "./App.css";
import WrapList from "./Components/WrapList.js";
import Player from "./Components/Player.js";

import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <WrapList />
      <Player />
    </div>
  );
}

export default App;
