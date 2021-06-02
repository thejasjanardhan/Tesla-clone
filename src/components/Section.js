import React from "react";
import styled from "styled-components";

import { Fade } from "react-awesome-reveal";

function Section({
  title,
  description,
  backgroundimg,
  leftBtntext,
  rightBtntext,
  src,
}) {
  return (
    <Wrap bgImage={backgroundimg}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade direction="up">
          <ButtonGroup>
            <LeftButton>{leftBtntext}</LeftButton>
            {rightBtntext && <RightButton>{rightBtntext}</RightButton>}
          </ButtonGroup>
        </Fade>
        {src && <DownArrow src={src}></DownArrow>}
        {/* <DownArrow src="/images/down-arrow.svg"></DownArrow> */}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  object-fit: contain;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgb(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 085;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  // margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2vh;
`;
