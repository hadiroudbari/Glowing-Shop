import styled from "styled-components";

const StyledInfo = styled.div`
  margin: 5rem 0 15rem;
  padding: 0 5rem;

  display: flex;
  justify-content: center;
  gap: 7rem;
`;

const StyledInfoItem = styled.div`
  display: flex;
  gap: 3rem;
`;

const StyledInfoItemImg = styled.img`
  width: 100px;
  height: 100px;
`;

const StyledInfoItemTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;

const StyledInfoItemText = styled.p`
  font-weight: 600;
  width: 300px;
  color: var(--color-grey-500);
`;

function InfoFeatures() {
  return (
    <StyledInfo>
      <StyledInfoItem>
        <StyledInfoItemImg
          src="./images/Other/image-box-18.png"
          alt="InfoFeatures"
        />
        <div>
          <StyledInfoItemTitle>Guaranteed PURE</StyledInfoItemTitle>
          <StyledInfoItemText>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </StyledInfoItemText>
        </div>
      </StyledInfoItem>

      <StyledInfoItem>
        <StyledInfoItemImg
          src="./images/Other/image-box-19.png"
          alt="InfoFeatures"
        />
        <div>
          <StyledInfoItemTitle>Completely Cruelty-Free</StyledInfoItemTitle>
          <StyledInfoItemText>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </StyledInfoItemText>
        </div>
      </StyledInfoItem>

      <StyledInfoItem>
        <StyledInfoItemImg
          src="./images/Other/image-box-20.png"
          alt="InfoFeatures"
        />
        <div>
          <StyledInfoItemTitle>Ingredient Sourcing</StyledInfoItemTitle>
          <StyledInfoItemText>
            All Grace formulations adhere to strict purity standards and will
            never contain harsh or toxic ingredients
          </StyledInfoItemText>
        </div>
      </StyledInfoItem>
    </StyledInfo>
  );
}

export default InfoFeatures;
