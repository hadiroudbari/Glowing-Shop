import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : "1.2")}rem;
`;

export default FlexRow;
