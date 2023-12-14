import styled from "styled-components";
import Button from "../Button";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Header = styled.h2`
  font-size: 3rem;
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 600;

  width: 400px;
  color: var(--color-grey-500);
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
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
    <Box>
      <Header>Good Emails</Header>
      <Text>
        Enter your email below to be the first to know about new collections and
        product launches.
      </Text>
      <InputBox>
        <Input type="text" placeholder="Enter your email address" />
        <Button bg="dark">Subscribe</Button>
      </InputBox>
    </Box>
  );
}

export default FooterContact;
