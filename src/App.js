import React from "react";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./Scores";

function App() {
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
      {allCountryScores.map((element) => (
        <HighScoreTable name={element.name} data={element.scores} />
      ))}
    </div>
  );
}

export default App;
