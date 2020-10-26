import React, { Fragment } from "react";
import BackgroundGradientSVG from "./BackgroundGradient.svg";
import BackgroundPatternSVG from "./BackgroundPattern.svg";
import styled from "styled-components";

const BackgroundGradient = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-image: linear-gradient(to bottom, #063c47, #000000);
`;

const BackgroundPattern = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  opacity: 0.049;
`;

export default function Layout({ children }) {
  return (
    <Fragment>
      <BackgroundGradient src={BackgroundGradientSVG} />
      <BackgroundPattern src={BackgroundPatternSVG} />
      {children}
    </Fragment>
  );
}
