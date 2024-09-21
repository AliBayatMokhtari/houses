import styled from "styled-components";

export const StyledIconButton = styled.button`
  outline: none;
  border: none;
  background: none;
  width: fit-content;
  padding: 8px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:first-of-type {
    margin-right: 2px;
  }
`;

export const Icon = styled.img`
  --size: 16px;
  width: var(--size);
  height: var(--size);
`;
