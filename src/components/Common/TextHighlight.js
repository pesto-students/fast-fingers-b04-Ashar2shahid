import React from "react";
import styled from "styled-components";

export default function TextHighlight({ word, typedWord }) {
  const HighLightText = styled.span`
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

  return (
    <div>
      {word.split("").map((char, index) => {
        if (typedWord.split("")[index]) {
          if (typedWord.split("")[index] === char) {
            return <HighLightText color='#54ba18'>{char}</HighLightText>;
          }
          return <HighLightText color='#445298'>{char}</HighLightText>;
        }
        return <HighLightText color='#FFFFFF'>{char}</HighLightText>;
      })}
    </div>
  );
}
