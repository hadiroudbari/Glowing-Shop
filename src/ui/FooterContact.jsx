import styled from "styled-components";
import Button from "./Button";

const StyledContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledContactHeader = styled.h2`
  font-size: 3rem;
`;

const StyledContactText = styled.p`
  font-size: 1.4rem;
  font-weight: 600;

  width: 400px;
  color: var(--color-grey-500);
`;

const StyledContactInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledContactInput = styled.input`
  height: 46px;
  width: 350px;

  margin: 2.1rem 0 1rem;
  margin-right: -1px;
  padding: 0 1rem;

  background-color: var(--color-grey-0);
  border-top-left-radius: var(--border-radius-tiny);
  border-bottom-left-radius: var(--border-radius-tiny);
`;

function FooterContact() {
  return (
    <StyledContactBox>
      <StyledContactHeader>Good Emails</StyledContactHeader>
      <StyledContactText>
        Enter your email below to be the first to know about new collections and
        product launches.
      </StyledContactText>
      <StyledContactInputBox>
        <StyledContactInput
          type="text"
          placeholder="Enter your email address"
        />
        <Button bg="dark">Subscribe</Button>
      </StyledContactInputBox>
    </StyledContactBox>
  );
}

export default FooterContact;
