import styled from "styled-components";
import {
  CiChat1,
  CiDeliveryTruck,
  CiLocationOn,
  CiWallet,
} from "react-icons/ci";

const Box = styled.div`
  margin: 10rem 0;
  padding: 10rem 5rem;
  background-color: var(--color-grey-100);

  display: flex;
  justify-content: center;
  gap: 7rem;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  text-align: center;
`;

const ItemTitle = styled.h3`
  font-size: 2.4rem;
  margin-top: 1rem;
`;

const ItemText = styled.p`
  font-weight: 600;
  width: 300px;
  color: var(--color-grey-500);
`;

function Supports() {
  return (
    <Box>
      <Item>
        <CiDeliveryTruck color="var(--color-brand-950)" size={60} />

        <ItemTitle>Free Shipping</ItemTitle>
        <ItemText>Free Shipping for orders over $130</ItemText>
      </Item>

      <Item>
        <CiLocationOn color="var(--color-brand-950)" size={60} />

        <ItemTitle>Returns</ItemTitle>
        <ItemText>Within 30 days for an exchange.</ItemText>
      </Item>

      <Item>
        <CiChat1 color="var(--color-brand-950)" size={60} />

        <ItemTitle>Online Support</ItemTitle>
        <ItemText>24 hours a day, 7 days a week</ItemText>
      </Item>

      <Item>
        <CiWallet color="var(--color-brand-950)" size={60} />

        <ItemTitle>Flexible Payment</ItemTitle>
        <ItemText>Pay with Multiple Credit Cards</ItemText>
      </Item>
    </Box>
  );
}

export default Supports;
