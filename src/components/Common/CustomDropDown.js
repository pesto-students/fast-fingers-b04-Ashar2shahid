import React, { Fragment, useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 100%;
  height: 90px;
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

const DropDownHeader = styled("div")`
  width: 100%;
  height: 80px;
  background-color: transparent;
  border-radius: 15px;
  border: solid 1px #ffffff;
  padding-left: 15px;
  padding-top: 15px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  font-size: 35px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #97a5a7;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  text-align: center;
  width: 95%;
  margin: auto;
  padding: 0px;
  opacity: 0.59;
  border-radius: 15px;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.8);
  background-color: #ffffff;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
  &:last-child {
    padding-bottom: 0.2em;
  }
`;

const ListItem = styled("li")`
  margin-bottom: 0.8em;
  opacity: 0.4;
  color: ${(props) => props.isHovered && "#ffffff"};
  background-color: ${(props) => props.isHovered && "#053a45"};
`;

const options = ["Easy", "Medium", "Hard"];

export default function CustomDropDown({ setDifficulty }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Easy");
  const [hoverOption, setHoverOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setDifficulty && setDifficulty(value);
    setIsOpen(false);
  };

  return (
    <Fragment>
      <DropDownHeader onClick={toggling}>{selectedOption || "Easy"}</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem
                isHovered={hoverOption === option}
                onMouseOver={() => setHoverOption(option)}
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Fragment>
  );
}
