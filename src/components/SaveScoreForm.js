import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useFirebase } from "./Firebase/FirebaseContext";

export default function SaveScoreForm({ score }) {
  const [username, setUsername] = useState("");
  const firebase = useFirebase();

  // console.log(firebase);

  const onUsernameChange = (e) => {
    const updatedUsername = e.target.value;
    setUsername(updatedUsername);
    console.log(username);
    console.log("Character Updated");
  };

  const saveHighScore = (e) => {
    e.preventDefault();
    console.log("Saving Highscore");
    window.location.reload(); // <-- Used
    const record = {
      name: username,
      score: score
    };

    firebase.scores().push(record, () => {
      console.log("Score saved!");
    });
    console.log(record);
  };
  return (
    <div>
      <p>You opened a mimic chest and lost all of your gold!</p>{" "}
      <img src="chest_mimic.png" alt="" width="100px" />
      <p>Boast your Biggest Plunder or try again.</p>
      {/* <form onSubmit={saveHighScore & window.location.reload()}> */}
      <form onSubmit={saveHighScore}>
        <input
          className="input"
          type="text"
          name="firstname"
          id="fname"
          placeholder="Enter name"
          value={username}
          onChange={onUsernameChange}
        />
        <button
          type="submit"
          className="btn"
          disabled={!username}
          // onClick={window.location.reload()}
        >
          Save
        </button>
      </form>
    </div>
  );
}
