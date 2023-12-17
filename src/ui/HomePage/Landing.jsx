import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const Container = styled.div`
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

const Title = styled.p`
  font-family: Allura;
  font-size: 6rem;
  color: var(--color-brand-950);
`;

const Strong = styled.span`
  font-size: 10rem;
`;

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  color: var(--color-grey-500);
  font-weight: 600;
`;

function Landing() {
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
      <Container bgnum={0} opc={bgNumber === 0 ? 100 : 0} />
      <Container bgnum={1} opc={bgNumber === 1 ? 100 : 0} />
      <Container bgnum={2} opc={bgNumber === 2 ? 100 : 0} />
      <SpecBox>
        <Title>
          <Strong>M</Strong>ake for you!
        </Title>
        <Heading>Beauty Inspired by Real Life</Heading>
        <Text>
          Made using clean, non-toxic ingredients, our products are designed for
          everyone.
        </Text>
        <NavLink to="/shop">
          <Button bg="dark">Shop Now</Button>
        </NavLink>
      </SpecBox>
    </>
  );
}

export default Landing;
