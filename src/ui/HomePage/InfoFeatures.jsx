import styled from "styled-components";

const Box = styled.div`
  margin: 5rem 0 15rem;
  padding: 0 5rem;

  display: flex;
  justify-content: center;
  gap: 7rem;
`;

const Item = styled.div`
  display: flex;
  gap: 3rem;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-weight: 600;
  width: 300px;
  color: var(--color-grey-500);
`;

function InfoFeatures() {
  return (
    <Box>
      <Item>
        <Img src="./images/Other/image-box-18.png" alt="InfoFeatures" />
        <div>
          <Title>Guaranteed PURE</Title>
          <Text>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </Text>
        </div>
      </Item>

      <Item>
        <Img src="./images/Other/image-box-19.png" alt="InfoFeatures" />
        <div>
          <Title>Completely Cruelty-Free</Title>
          <Text>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </Text>
        </div>
      </Item>

      <Item>
        <Img src="./images/Other/image-box-20.png" alt="InfoFeatures" />
        <div>
          <Title>Ingredient Sourcing</Title>
          <Text>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </Text>
        </div>
      </Item>
    </Box>
  );
}

export default InfoFeatures;
