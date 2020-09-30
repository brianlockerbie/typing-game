import React, { useState, useEffect } from "react";
import Words from "./components/Words";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord,setnewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="App">
      <h1>Welcome</h1> 
    </div>
  );
};

export default App;
