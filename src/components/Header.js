import React from "react";

function Header(props) {
  return (
    <div>
      <div className="heading">
        <p>Treasure Chest Game</p>
        <div>
          <ul className="navul">
            <li className="navli">
              <a href="/">Play</a>
            </li>
            <li className="navli">
              <a href="/highscores">Tavern</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
