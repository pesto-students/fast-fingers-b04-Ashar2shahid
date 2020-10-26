import React from "react";
import { useEffect, useState } from "react";
import StartScreen from "./screens/StartScreen";

export default function Base() {
  const screens = {
    start: StartScreen,
    game: "game",
    end: "end",
  };
  const [gameState, setGameState] = useState("start");
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  return React.createElement(screens[gameState], {
    setGameState: setGameState,
    setName: setName,
    setDifficulty: setDifficulty,
    gameState: gameState,
  });
}
