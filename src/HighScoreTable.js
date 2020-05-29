import React from "react";
import ScorerScore from "./ScorerScore";
import ScorerName from "./ScorerName";

const HighScoreTable = (props) => {
  return (
    <div className="high-score-table">
      <div className="country-name">
        <h1>High Score : {props.name}</h1>
      </div>
      <div className="scorer">
        <div className="scorer-names">
          {props.data.map((element) => (
            <ScorerName data={element} />
          ))}
        </div>
        <div className="scorer-scores">
          {props.data.map((element) => (
            <ScorerScore data={element} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighScoreTable;
