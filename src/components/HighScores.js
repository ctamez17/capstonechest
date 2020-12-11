import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useFirebase } from "./Firebase/FirebaseContext";

export default function HighScores() {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.scores().once("value", (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      // setLoading(false);
    });
  }, [firebase]);

  const formatScoreData = (firebaseScores) => {
    const scores = [];

    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val["key"] = key;
      scores.push(val);
    }

    return scores
      .sort((score1, score2) => score2.score - score1.score)
      .slice(0, 10);
  };

  return (
    <>
      {/* {loading && <div id="loader"></div>}
      {!loading && ( */}
      <>
        <Header />
        <p className="note">Previous Bests:</p>
        <div id="highScoresList" className="tavernList">
          {scores.map((record) => (
            <li>
              {record.name} - {record.score}
            </li>
          ))}
        </div>
        <footer className="footer">💰 Chainsaw's Booty 💰</footer>
      </>
    </>
  );
}
