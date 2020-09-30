import React, { useState, useEffect } from "react";
import Words from "./components/Words";
import Container from './components/Container';
import Typeracer from './components/Typeracer';
import "./App.css";

const App = () => {
  const [word, setWord] = useState(Words);
  const [newWord,setnewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState('');
  const [animation, setAnimation] = useState(null);
  
  let randomWord = Math.floor(Math.random() * word.length);

  return (
    <div className="App">
      <Container>
        <Typeracer
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          disabled={disabled}
          time={time}
          animation={animation}
        />
      </Container> 
    </div>
  );
};

export default App;
