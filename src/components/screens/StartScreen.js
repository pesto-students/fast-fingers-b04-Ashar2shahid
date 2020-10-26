import React from "react";
import { GameTitle, GameDescription, InputBox, KeyBoardImage, SelectBox, StartBox } from "../Common/StyledComponents";
import CustomDropDown from "../Common/CustomDropDown";

export default function startScreen({ setDifficulty, setName, setGameState }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div style={{ paddingTop: 125 }}>
            <KeyBoardImage src='img/icon-awesome-keyboard.svg'></KeyBoardImage>
            <div style={{ textAlign: "center" }}>
              <GameTitle style={{ paddingTop: 25 }}> fast fingers</GameTitle>
            </div>
            <div className='row'>
              <div
                className='col-3'
                style={{ width: "100%", border: "solid 1px #ff5155", height: 0, marginTop: 15 }}
              ></div>
              <div className='col-6'>
                {" "}
                <GameDescription> the ultimate typing game</GameDescription>{" "}
              </div>
              <div
                className='col-3'
                style={{ width: "100%", border: "solid 1px #ff5155", height: 0, marginTop: 15 }}
              ></div>
            </div>

            <div style={{ paddingTop: 50 }}>
              <InputBox onChange={(event) => setName(event.target.value)} placeholder='TYPE YOUR NAME'></InputBox>
            </div>
            <div style={{ paddingTop: 50 }}>
              <CustomDropDown setDifficulty={setDifficulty}></CustomDropDown>
            </div>
            <div
              onClick={() => setGameState("game")}
              className='row justify-content-center'
              style={{ width: "100%", paddingTop: 170 }}
            >
              <img src='img/icon-awesome-play.svg' />

              <StartBox onClick={() => setGameState("game")} style={{ paddingTop: 10 }}>
                START GAME
              </StartBox>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-3'></div>
    </div>
  );
}
