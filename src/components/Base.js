import React from "react";
import { useEffect, useState } from "react";
import StartScreen from "./screens/StartScreen";
import gameScreen from "./screens/GameScreen";
import EndScreen from "./screens/EndScreen";

export default function Base() {
  const screens = {
    start: StartScreen,
    game: gameScreen,
    end: EndScreen,
  };
  const [gameState, setGameState] = useState("start");
  const [name, setName] = useState("John");
  const [difficulty, setDifficulty] = useState("Easy");
  const [gameScore, setGameScore] = useState({});
  return React.createElement(screens[gameState], {
    setGameState: setGameState,
    gameState: gameState,
    setName: setName,
    name: name,
    setDifficulty: setDifficulty,
    difficulty: difficulty,
    setGameScore: setGameScore,
    gameScore: gameScore,
  });
}
