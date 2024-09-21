import BackIconButton from "components/common/back-icon-button/BackIconButton";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-top: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  display: inline-flex;
  vertical-align: middle;
`;

export const StyledBackIconButton = styled(BackIconButton)`
  vertical-align: middle;
  position: absolute;
  top: 50%;
  transform: translateY(-4px);
  left: 1rem;
`;
