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
  };

  const saveHighScore = (e) => {
    e.preventDefault();
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
