import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.element.background.hex};
`;

export const OutletContainer = styled.div`
  flex: 1;
  overflow: auto;
`;
