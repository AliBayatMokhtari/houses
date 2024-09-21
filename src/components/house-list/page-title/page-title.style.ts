import LoadingSpinner from "components/common/loading-spinner/LoadingSpinner";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-block: 2rem;
`;

export const Space = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  flex: 1;
  text-align: center;
  line-height: 1;
`;

export const ActionContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledSpinner = styled(LoadingSpinner)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
`;
