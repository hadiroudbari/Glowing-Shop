import styled from "styled-components";
import {
  CiChat1,
  CiDeliveryTruck,
  CiLocationOn,
  CiWallet,
} from "react-icons/ci";

const StyledSupport = styled.div`
  margin: 10rem 0;
  padding: 10rem 5rem;
  background-color: var(--color-grey-100);

  display: flex;
  justify-content: center;
  gap: 7rem;
`;

const StyledSupportItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  text-align: center;
`;

const StyledSupportItemTitle = styled.h3`
  font-size: 2.4rem;
  margin-top: 1rem;
`;

const StyledSupportItemText = styled.p`
  font-weight: 600;
  width: 300px;
  color: var(--color-grey-500);
`;

function Supports() {
  return (
    <StyledSupport>
      <StyledSupportItem>
        <CiDeliveryTruck color="var(--color-brand-950)" size={60} />

        <StyledSupportItemTitle>Free Shipping</StyledSupportItemTitle>
        <StyledSupportItemText>
          Free Shipping for orders over $130
        </StyledSupportItemText>
      </StyledSupportItem>

      <StyledSupportItem>
        <CiLocationOn color="var(--color-brand-950)" size={60} />

        <StyledSupportItemTitle>Returns</StyledSupportItemTitle>
        <StyledSupportItemText>
          Within 30 days for an exchange.
        </StyledSupportItemText>
      </StyledSupportItem>

      <StyledSupportItem>
        <CiChat1 color="var(--color-brand-950)" size={60} />

        <StyledSupportItemTitle>Online Support</StyledSupportItemTitle>
        <StyledSupportItemText>
          24 hours a day, 7 days a week
        </StyledSupportItemText>
      </StyledSupportItem>

      <StyledSupportItem>
        <CiWallet color="var(--color-brand-950)" size={60} />

        <StyledSupportItemTitle>Flexible Payment</StyledSupportItemTitle>
        <StyledSupportItemText>
          Pay with Multiple Credit Cards
        </StyledSupportItemText>
      </StyledSupportItem>
    </StyledSupport>
  );
}

export default Supports;
