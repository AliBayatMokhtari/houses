import styled from "styled-components";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.element.primary.hex};
  outline: none;
  border: none;
  padding-block: 6px;
  padding-inline: 14px;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.element.white.hex};
  position: relative;
`;

export const Content = styled.span<{ $loading: boolean }>`
  opacity: ${(props) => (props.$loading ? 0 : 1)};
`;

export const Spinner = styled(LoadingSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 1.5px;
`;
