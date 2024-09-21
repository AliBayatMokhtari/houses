import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 3rem;
`;

export const NoResultImage = styled.img`
  max-width: 350px;
  width: 100%;
`;

export const NoResultMsg = styled.p`
  margin-top: 3rem;
  max-width: 300px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text.secondary.hex};
`;
