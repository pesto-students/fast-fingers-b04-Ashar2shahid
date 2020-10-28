import styled from "styled-components";

export const KeyBoardImage = styled.img`
  width: 220.2px;
  height: 150.1px;
  object-fit: contain;
  opacity: 0.64;
`;

export const GameTitle = styled.div`
  font-family: LaserCorpsGradient;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "60px")};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ff5155;
`;

export const GameDescription = styled.div`
  font-family: Gotham;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;
  color: #ff5155;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 80px;
  opacity: 0.59;
  border-radius: 15px;
  padding-left: 15px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  background-color: #ffffff;
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #032228;
`;

export const SelectBox = styled.select`
  width: 100%;
  height: 80px;
  background-color: transparent;
  border-radius: 15px;
  border: solid 1px #ffffff;
  padding-left: 15px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

export const StartBox = styled.div`
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.16);
  font-family: Gotham;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "48px")};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => (props.color ? props.color : "#ff5155")};
`;
