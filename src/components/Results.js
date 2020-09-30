import React from 'react';

const Results = () => {
  return (
    <div className="results">
      <div className="title">
        <p>Correct answers: 7</p>
      </div>
      <div className="resultsContainer">
        <div className="correctResults">
          <p>Correct</p>
        </div>
        <div className="wrongResults">
          <p>Wrong</p>
        </div>
      </div>
    </div>
  );
};
