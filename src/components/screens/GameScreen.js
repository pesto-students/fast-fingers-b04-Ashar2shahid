import React, { Fragment, useRef } from "react";
import { useEffect, useState } from "react";
import CountdownCircle from "../Common/CountdownCircle";
import { GameTitle, StartBox, InputBox } from "../Common/StyledComponents";
import TextHighlight from "./../Common/TextHighlight";
const wordDictionary = require("./dictionary.json");

export default function GameScreen(props) {
  let timerInterval = useRef(null);

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
    },
    alert: {
      color: "red",
    },
  };

  const base_difficulty = {
    Easy: 1,
    Medium: 1.5,
    Hard: 2,
  };

  let nextWord = getRandomWord(base_difficulty[props.difficulty]);

  const [state, setState] = useState({
    loading: false,
    timer: nextWord.length / base_difficulty[props.difficulty],
    time_limit: nextWord.length / base_difficulty[props.difficulty],
    currentWord: nextWord,
    typedWord: "",
    remainingPathColor: COLOR_CODES.info.color,
    difficulty: base_difficulty[props.difficulty],
    score: 0,
  });

  useEffect(() => {
    startTimer();
    props.setGameScore((prevGameScore) => ({
      ...prevGameScore,
      [props.name]: prevGameScore[props.name] || [],
    }));
  }, []);

  useEffect(() => {
    if (state.typedWord === state.currentWord) {
      clearInterval(timerInterval.current);
      setState((prevState) => {
        nextWord = getRandomWord(prevState.difficulty + 0.01);
        return {
          ...prevState,
          loading: true,
          difficulty: prevState.difficulty + 0.01,
          timer: nextWord.length / prevState.difficulty,
          time_limit: nextWord.length / base_difficulty[props.difficulty],
          remainingPathColor: COLOR_CODES.info.color,
          currentWord: nextWord,
          typedWord: "",
        };
      });
      setTimeout(() => {
        startTimer();
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }, 2000);
    }

    if (state.timer == 0) {
      props.setGameScore((prevGameScore) => ({
        ...prevGameScore,
        [props.name]: [...prevGameScore[props.name], state.score],
      }));
      clearInterval(timerInterval.current);
      props.setGameState("end");
    }
  }, [state]);

  function getRandomWord(difficulty) {
    let filteredArray;
    if (difficulty >= 2.0) {
      if (props.difficulty !== "Hard") props.setDifficulty("Hard");
      filteredArray = wordDictionary.filter((word) => word.length > 8);
      return filteredArray[Math.floor(Math.random() * filteredArray.length)];
    } else if (difficulty >= 1.5) {
      if (props.difficulty !== "Medium") props.setDifficulty("Medium");
      filteredArray = wordDictionary.filter((word) => 5 <= word.length && word.length <= 8);
      return filteredArray[Math.floor(Math.random() * filteredArray.length)];
    } else {
      if (props.difficulty !== "Easy") props.setDifficulty("Easy");
      filteredArray = wordDictionary.filter((word) => word.length <= 4);
      return filteredArray[Math.floor(Math.random() * filteredArray.length)];
    }
  }

  function startTimer() {
    timerInterval.current = setInterval(() => {
      setState((prevState) => {
        let newCircleColor = COLOR_CODES.info.color;
        if (prevState.timer < prevState.time_limit * 0.75 && prevState.timer > prevState.time_limit * 0.25)
          newCircleColor = COLOR_CODES.warning.color;
        if (prevState.timer < prevState.time_limit * 0.25) newCircleColor = COLOR_CODES.alert.color;
        if (prevState.timer > 0.1) {
          return {
            ...prevState,
            timer: prevState.timer - 0.1,
            remainingPathColor: newCircleColor,
            score: prevState.score + 0.1,
          };
        }
        return {
          ...prevState,
          timer: 0,
          remainingPathColor: newCircleColor,
        };
      });
    }, 100);
  }

  function onChange(event) {
    const newWord = event.target.value;
    setState((prevState) => ({ ...prevState, typedWord: newWord }));
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-3'>
          <div className='row justify-content-start' style={{ paddingTop: 50, paddingLeft: 60 }}>
            <img src='img/icon-material-person.svg'></img>
            <StartBox style={{ paddingLeft: 15 }}>{props.name}</StartBox>
          </div>
          <div className='row justify-content-start' style={{ paddingTop: 10, paddingLeft: 60 }}>
            <img src='img/icon-awesome-gamepad.svg'></img>
            <StartBox style={{ paddingLeft: 15 }}>{props.difficulty}</StartBox>
          </div>
          <div
            style={{
              marginTop: 50,
              marginLeft: 60,
              width: "65%",
              height: "50vh",
              border: "solid 3px #ff5155",
              borderRadius: 15,
            }}
          >
            <StartBox style={{ textAlign: "center" }} fontSize='30px'>
              Scoreboard
            </StartBox>
            {props.gameScore[props.name] &&
              props.gameScore[props.name].map((score, index) => {
                return Math.max(...props.gameScore[props.name]) !== score ? (
                  <StartBox style={{ textAlign: "center" }} fontSize='20px' color='#FFFFFF'>
                    Game{index + 1} : {score.toFixed(2)}
                  </StartBox>
                ) : (
                  <Fragment>
                    <StartBox style={{ textAlign: "center" }} fontSize='8px'>
                      PERSONAL BEST
                    </StartBox>
                    <StartBox style={{ textAlign: "center" }} fontSize='20px' color='#FFFFFF'>
                      Game{index + 1} : {score.toFixed(2)}
                    </StartBox>
                  </Fragment>
                );
              })}
          </div>
          <div
            onClick={() => props.setGameState("start")}
            className='row justify-content-start'
            style={{ paddingTop: 50, paddingLeft: 60 }}
          >
            <img src='img/icon-metro-cross.svg' />

            <StartBox fontSize='30px' onClick={() => props.setGameState("start")} style={{ paddingTop: 25 }}>
              STOP GAME
            </StartBox>
          </div>
        </div>
        <div className='col-md-6'>
          {!state.loading ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
              <div>
                <div style={{ paddingLeft: 50 }}>
                  <CountdownCircle
                    TIME_LIMIT={state.time_limit}
                    timer={state.timer}
                    remainingPathColor={state.remainingPathColor}
                  ></CountdownCircle>
                </div>
                <div style={{ paddingTop: 80 }}>
                  <TextHighlight word={state.currentWord} typedWord={state.typedWord}></TextHighlight>
                </div>
                <InputBox autoFocus value={state.typedWord} onChange={onChange} style={{ marginTop: 45 }}></InputBox>
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
              <StartBox> GET READY FOR THE NEXT WORD</StartBox>
            </div>
          )}
        </div>
        <div className='col-md-3'>
          <div className='row justify-content-start' style={{ paddingTop: 50 }}>
            <GameTitle fontSize='56px'>Fast Fingers</GameTitle>
          </div>
          <div className='row justify-content-start' style={{ paddingTop: 10 }}>
            <StartBox>SCORE: {state.score.toFixed(2)}</StartBox>
          </div>
        </div>
      </div>
    </div>
  );
}
