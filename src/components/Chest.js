import React, { useState, useEffect } from "react";
import Score from "./Score";
import SaveScoreForm from "./SaveScoreForm";
import Header from "./Header";

function Chest() {
  let [score, setScore] = useState(0);
  let [roll, setRoll] = useState(0);
  let [winner, setWinner] = useState(false);
  let [loser, setLoser] = useState(false);
  let [highscore, setHighscore] = useState(0);
  let [increase, setIncrease] = useState(0);
  // let [startPlay, setStartPlay] = useState(false);

  // console.log(process.env.REACT_APP_API_KEY);

  const createRandom = () => {
    let rollRandom = Math.floor(Math.random() * 10) + 1;
    setRoll(rollRandom);
  };

  const checkForWin = () => {
    //setStartPlay(true);
    if (roll >= 3) {
      setWinner(true);
      setLoser(false);
      handleIncrement();
      console.log(
        "WIN - Score: " +
          score +
          " - Highscore: " +
          highscore +
          " - Roll: " +
          roll
      );
    } else if (roll < 3) {
      setWinner(false);
      setLoser(true);

      if (score > highscore) {
        setHighscore(score);
      }

      console.log(
        "LOSE - Score: " +
          score +
          " - Highscore: " +
          highscore +
          " - Roll: " +
          roll
      );
      gameRestart();
      createRandom();
    }
  };

  const handleIncrement = () => {
    if (roll === 0) {
      setIncrease(0);
    } else if (roll > 0 && roll <= 3) {
      setIncrease(5);
    } else if (roll > 3 && roll <= 6) {
      setIncrease(10);
    } else if (roll > 6 && roll <= 9) {
      setIncrease(25);
    } else if (roll === 10) {
      setIncrease(100);
    }
    setScore(score + increase);
  };

  function gameRestart() {
    setScore(0);
    setRoll(0);
    setIncrease(0);
  }

  useEffect(() => {
    createRandom();
  }, [score]);

  return (
    <div>
      <div className="headingContainer">
        <Header />
      </div>
      <p className="note">Try your luck, pick a chest:</p>
      <div className="scoreContainer">
        {/* --- CHESTS x3 --- */}
        <div className="chestFlex">
          <img
            onClick={checkForWin}
            className="chestImg"
            src="../chest_closed.png"
            alt="ChestOne"
          />
          <img
            onClick={checkForWin}
            className="chestImg"
            src="chest_closed.png"
            alt="ChestTwo"
          />
          <img
            onClick={checkForWin}
            className="chestImg"
            src="chest_closed.png"
            alt="ChestThree"
          />
        </div>
        {/* --- HIGH SCORE --- */}
        <div className="highscore">
          {/* <>{!startPlay && <p>Biggest Plunder: {highscore}</p>}</> */}
          <p>Biggest Plunder: {highscore} gold</p>
        </div>
        {/* --- SCORE --- */}
        <Score score={score} increase={increase} />
        {/* --- SHOW WINNER */}
      </div>
      <div className="resultsWin">
        <>
          {winner && (
            <p>Congratulations! You found {increase} gold in this chest!</p>
          )}
        </>
      </div>
      {/* --- SHOW LOSER --- */}
      <div className="resultsLose">
        <>{loser && <SaveScoreForm score={highscore} />}</>
      </div>

      <footer className="footer">Cody's Treasure Chest Game</footer>
    </div>
  );
}
export default Chest;
