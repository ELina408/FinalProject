import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataPlayers from "./DataPlayers";

function Second() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e1faf7905emsh7a7726a78497a72p126b46jsna49b3e05a570",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
      }
    };

fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", options)
.then(response => response.json())
.then(response => {
  setPlayers(response.data);
  console.log(response.data)})

  .catch(error =>
    console.error(error));
  }, []);
  return (
    <>
    <div className="nba"><h1 className="h1">Игроки NBA</h1></div>
    <DataPlayers players={players}/>
    </>
  )
}
export default Second;
