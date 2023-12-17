import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const ImageMain = styled.img`
  width: 40rem;
  height: 60rem;
`;

const ImageAside = styled.img`
  width: 7.5rem;
`;

const AsideButton = styled.button`
  border: ${(props) =>
    props.active
      ? "1px solid var(--color-grey-900)"
      : "1px solid var(--color-grey-0)"};
  height: fit-content;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

function DetailsPictures({ images }) {
  const [imageId, setImageId] = useState(0);

  return (
    <Box>
      <ImageColumn>
        {images.map((image, i) => (
          <AsideButton
            key={i}
            onClick={() => setImageId(i)}
            active={imageId === i}
          >
            <ImageAside src={image} alt={image} />
          </AsideButton>
        ))}
      </ImageColumn>
      <ImageMain src={images[imageId]} alt={images[imageId]} />
    </Box>
  );
}

export default DetailsPictures;
