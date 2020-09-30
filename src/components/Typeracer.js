import React from "react";
import Button from "./Button";

const Typeracer = () => {
  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>New Word</p>
      </div>
      <div className ="time">
        <p>Time</p>
      </div>
      <div className="wordValues">
          <input type="text" />
          <Button />
      </div>
    </div>
  );
};

export default Typeracer;