import React from "react";

function Score({ score, increase }) {
  return <span>Current Gold: {score + increase} </span>;
}
export default Score;
