import styled from "styled-components";
import Row from "../Row";
import FlexRow from "../FlexRow";
import { useState } from "react";

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.6rem;

  margin-top: 4.8rem;
  margin-bottom: 3.2rem;
`;

const Title = styled.button`
  font-size: 3.2rem;
  font-weight: 800;
  color: ${(props) =>
    props.active ? "var(--color-grey-900)" : "var(--color-grey-500)"};
`;

const DetailsBox = styled.div`
  display: flex;
  gap: 12rem;
`;

const DetailsImg = styled.img`
  width: 45rem;
  height: 55rem;
`;

const DetailsTitle = styled.h5`
  font-size: 1.6rem;
  font-weight: 700;
`;

const DetailsText = styled.p`
  font-size: 1.4rem;
  width: 50rem;
  color: var(--color-grey-500);
`;

const DetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-bottom: 3.2rem;
`;

const DetailsItem = styled.li`
  font-size: 1.4rem;
  color: var(--color-grey-500);

  position: relative;
  padding-left: 1.6rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);

    width: 5px;
    height: 5px;
    background-color: var(--color-grey-500);
    border-radius: 50%;
  }
`;

const DetailsOtherImg = styled.img`
  width: 8.6rem;
  height: 8.6rem;
`;

const Ingredients = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const IngredientsText = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

function DetailsMore() {
  const [details, setDetails] = useState(1);

  return (
    <>
      <TitleBox>
        <Title onClick={() => setDetails(1)} active={details === 1}>
          Product Details
        </Title>
        <Title onClick={() => setDetails(2)} active={details === 2}>
          How To Use
        </Title>
        <Title onClick={() => setDetails(3)} active={details === 3}>
          Ingredients
        </Title>
      </TitleBox>
      {details === 1 && (
        <DetailsBox>
          <DetailsImg
            src="../images/Beauty/banner-34.jpg"
            alt="MoreDetailsImage"
          />
          <Row>
            <DetailsTitle>
              For Normal, Oily, Combination Skin Types
            </DetailsTitle>
            <DetailsText>
              Complexion-perfecting natural foundation enriched with
              antioxidant-packed superfruits, vitamins, and other
              skin-nourishing nutrients. Creamy liquid formula sets with a
              pristine matte finish for soft, velvety smooth skin.
            </DetailsText>
            <DetailsText>
              Say hello to flawless, long-lasting foundation that comes in 7
              melt-into-your-skin shades. This lightweight, innovative formula
              creates a smooth, natural matte finish that won’t settle into
              lines. It’s the perfect fit for your skin. 1 fl. oz.
            </DetailsText>
            <DetailsTitle>Benefits</DetailsTitle>
            <DetailsList>
              <DetailsItem>Buildable medium-to-full coverage</DetailsItem>
              <DetailsItem>Weightless, airy feel—no caking!</DetailsItem>
              <DetailsItem>Long-wearing</DetailsItem>
              <DetailsItem>Evens skin tone</DetailsItem>
              <DetailsItem>
                Available in 07 shades (all exclusive to MakeahoDetailsItemc!)
              </DetailsItem>
            </DetailsList>
            <FlexRow gap="4.8">
              <DetailsOtherImg
                src="../images/Other/product-info-3-1.png"
                alt="MoreDetailsImage"
              />
              <DetailsOtherImg
                src="../images/Other/product-info-3-2.png"
                alt="MoreDetailsImage"
              />
              <DetailsOtherImg
                src="../images/Other/product-info-3-3.png"
                alt="MoreDetailsImage"
              />
              <DetailsOtherImg
                src="../images/Other/product-info-3-4.png"
                alt="MoreDetailsImage"
              />
            </FlexRow>
          </Row>
        </DetailsBox>
      )}
      {details === 2 && (
        <Row>
          <DetailsTitle>
            Follow these safety guidelines when using cosmetics products of any
            type:
          </DetailsTitle>

          <DetailsList>
            <DetailsItem>
              Read the label. Follow all directions and heed all warnings.
            </DetailsItem>
            <DetailsItem>
              Wash your hands before you use the product.
            </DetailsItem>
            <DetailsItem>Do not share makeup.</DetailsItem>
            <DetailsItem>
              Keep the containers clean and tightly closed when not in use, and
              protect them from temperature extremes.
            </DetailsItem>
            <DetailsItem>
              Throw away cosmetics if there are changes in color or smell.
            </DetailsItem>
            <DetailsItem>
              Use aerosols or sprays cans in well-ventilated areas. Do not use
              them while you are smoking or near an open flame. It could start a
              fire.
            </DetailsItem>
          </DetailsList>
        </Row>
      )}
      {details === 3 && (
        <Row>
          <Ingredients>
            <DetailsTitle>CAS</DetailsTitle>
            <IngredientsText>92128-82-0, 9057-02-7</IngredientsText>
          </Ingredients>
          <Ingredients>
            <DetailsTitle>INCI</DetailsTitle>
            <IngredientsText>
              Nannochloropsis Oculata (micro algae) extract, pullulan
            </IngredientsText>
          </Ingredients>
          <Ingredients>
            <DetailsTitle>Composition</DetailsTitle>
            <IngredientsText>
              Nannochloropsis Oculata (micro algae) extract, pullulan, water,
              ethanol
            </IngredientsText>
          </Ingredients>
          <Ingredients>
            <DetailsTitle>Appearance</DetailsTitle>
            <IngredientsText>Yellow to amber, viscous liquid</IngredientsText>
          </Ingredients>
          <Ingredients>
            <DetailsTitle>Solubility</DetailsTitle>
            <IngredientsText>Soluble in water & ethanol</IngredientsText>
          </Ingredients>
          <Ingredients>
            <DetailsTitle>Storage</DetailsTitle>
            <IngredientsText>
              {" "}
              Store refrigerated (4-8oC / 39-46oF)
            </IngredientsText>
          </Ingredients>
          <Ingredients>
            <IngredientsText>
              Perfect for Equestrian homes or every horse lover. Designer
              premium signature aluminum alloy all Arthur Court is compliance
              with FDA regulations. Aluminum Serveware can be chilled in the
              freezer or refrigerator and warmed in the oven to 350. Wash by
              hand with mild dish soap and dry immediately – do not put in the
              dishwasher. Comes in Gift Box perfect for Equestrian home or Horse
              lover in your life.
            </IngredientsText>
          </Ingredients>
        </Row>
      )}
    </>
  );
}

export default DetailsMore;
