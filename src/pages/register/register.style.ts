import Button from "components/common/button/Button";
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterButton = styled(Button)`
  font-size: 16px;
  padding-block: 12px;
  padding-inline: 20px;
  span {
    font-family: Montserrat;
  }
`;
