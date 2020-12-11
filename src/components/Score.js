import React from "react";

function Score({ score, increase }) {
  return (
    <div className="score">
      <p>Current Gold: {score + increase} </p>
    </div>
  );
}
export default Score;
