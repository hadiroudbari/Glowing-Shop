import styled from "styled-components";

import Button from "../Button";

const Box = styled.div`
  position: relative;
  overflow: hidden;

  color: var(--color-grey-0);

  &:hover img {
    transform: scale(1.1);
  }
`;

const Img = styled.img`
  height: ${(props) => (props.type === "reverse" ? "915px" : "935px")};
  transition: all 0.3s;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  bottom: 5%;
  left: 10%;
`;

const Span = styled.span`
  font-family: "Allura";
  font-size: 5rem;
`;

const Text = styled.p`
  font-size: 4rem;
  font-weight: 600;
`;

function BeautyItem({ src, title, text, type }) {
  return (
    <Box>
      <Img src={src} alt={title} type={type} />
      <TextBox>
        <Span>{title}</Span>
        <Text>{text}</Text>
        <Button bg="light">Explore More</Button>
      </TextBox>
    </Box>
  );
}

export default BeautyItem;
