import React from "react";
import { GameTitle, StartBox, InputBox } from "../Common/StyledComponents";

export default function EndScreen(props) {
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
            onClick={() => props.setGameState("start")}
            className='row justify-content-start'
            style={{ paddingTop: 50, paddingLeft: 60 }}
          >
            <StartBox fontSize='30px' onClick={() => props.setGameState("start")} style={{ paddingTop: 600 }}>
              QUIT
            </StartBox>
          </div>
        </div>
        <div className='col-md-6'>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <div>
              <div style={{ paddingLeft: 50 }}></div>
              <StartBox fontSize='30px' color='#FFFFFF'>
                SCORE: GAME {props.gameScore[props.name].length}
              </StartBox>
              <StartBox style={{ textAlign: "center" }} fontSize='50px' color='#FFFFFF'>
                {props.gameScore[props.name].slice(-1)[0].toFixed(2)}
              </StartBox>
              <div className='row justify-content-center' style={{ paddingTop: 50 }}>
                <img
                  style={{ paddingTop: 50, paddingRight: 10 }}
                  src='/img/icon-open-reload.svg'
                  onClick={() => props.setGameState("game")}
                ></img>
                <StartBox fontSize='30px' onClick={() => props.setGameState("game")} style={{ paddingTop: 60 }}>
                  PLAY AGAIN
                </StartBox>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='row justify-content-start' style={{ paddingTop: 50 }}>
            <GameTitle fontSize='56px'>Fast Fingers</GameTitle>
          </div>
        </div>
      </div>
    </div>
  );
}
