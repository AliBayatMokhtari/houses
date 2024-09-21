import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 16px;
  display: flex;
`;

export const ItemContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text.primary.hex};
`;

export const NavigationImage = styled.img`
  --size: 30px;
  width: var(--size);
  height: var(--size);
`;
