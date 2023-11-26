import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import Button from "./Button";

const StyledContainer = styled.div`
  ${(props) =>
    props.bgnum === 0 &&
    css`
      background-image: url("./images/Hero/hero-slider-08.jpg");
    `};

  ${(props) =>
    props.bgnum === 1 &&
    css`
      background-image: url("./images/Hero/hero-slider-19.jpg");
    `};

  ${(props) =>
    props.bgnum === 2 &&
    css`
      background-image: url("./images/Hero/hero-slider-02.jpg");
    `};

  background-size: cover;
  background-position: center;
  position: absolute;

  width: 100%;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => props.opc};
`;

const SpecBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
`;

const StyledSpecTitle = styled.p`
  font-family: Allura;
  font-size: 6rem;
  color: var(--color-brand-950);
`;

const StyledSpecStrong = styled.span`
  font-size: 10rem;
`;

const StyledSpecHeading = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 2rem;
`;

const StyledSpecText = styled.p`
  color: var(--color-grey-500);
  font-weight: 600;
`;

function Landing({ children }) {
  const [bgNumber, setBgNumber] = useState(0);

  useEffect(
    function () {
      let bgCounter = setInterval(() => setBgNumber((num) => num + 1), 5000);

      if (bgNumber === 3) setBgNumber(0);
      return () => clearInterval(bgCounter);
    },
    [bgNumber]
  );

  return (
    <>
      <StyledContainer bgnum={0} opc={bgNumber === 0 ? 100 : 0}>
        {children}
      </StyledContainer>
      <StyledContainer bgnum={1} opc={bgNumber === 1 ? 100 : 0}>
        {children}
      </StyledContainer>
      <StyledContainer bgnum={2} opc={bgNumber === 2 ? 100 : 0}>
        {children}
      </StyledContainer>
      <SpecBox>
        <StyledSpecTitle>
          <StyledSpecStrong>M</StyledSpecStrong>ake for you!
        </StyledSpecTitle>
        <StyledSpecHeading>Beauty Inspired by Real Life</StyledSpecHeading>
        <StyledSpecText>
          Made using clean, non-toxic ingredients, our products are designed for
          everyone.
        </StyledSpecText>
        <Button bg="dark">Shop Now</Button>
      </SpecBox>
    </>
  );
}

export default Landing;
