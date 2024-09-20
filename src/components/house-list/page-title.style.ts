import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-block: 2rem;
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

export const PlusIcon = styled.img`
  --size: 18px;
  width: var(--size);
  height: var(--size);
`;
