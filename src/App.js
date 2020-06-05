import React, { useState } from "react";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./Scores";

function App() {
  allCountryScores.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );

  const [isAscending, setIsAscending] = useState(true);
  function handleClick() {
    console.log(isAscending);
    setIsAscending(!isAscending);
  }
  return (
    <div className="App">
      <header>
        <button onClick={handleClick}> Arrange the order ! </button>
      </header>
      <h1>High Scores per Country</h1>
      {allCountryScores.map((element) => (
        <HighScoreTable
          name={element.name}
          data={element.scores}
          isAscending={isAscending}
        />
      ))}
    </div>
  );
}

export default App;
