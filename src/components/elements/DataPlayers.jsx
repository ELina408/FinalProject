import React from "react";

function DataPlayers({ players }) {
  return (
    <div className="players__wrapp">
      {players.map((el, index) => {
        const lastname = el.last_name;
        const firstname = el.firstname;
        return (
          <div className="players" key={el.id}>
            {index + 1}. {firstname} {lastname}
          </div>
        );
      })}
    </div>
  );
}

export default DataPlayers;
