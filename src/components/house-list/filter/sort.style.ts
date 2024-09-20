import styled from "styled-components";

export const Container = styled.div`
  --radius: 12px;

  display: flex;
  margin-top: 2rem;
`;

const SortItem = styled.button<{ $active: boolean }>`
  flex: 1;
  height: 40px;
  text-align: center;
  border: none;
  outline: none;
  font-weight: bold;
  font-family: Montserrat;
  color: ${(props) => props.theme.colors.element.white.hex};
  background-color: ${({ $active, ...props }) =>
    $active
      ? props.theme.colors.element.primary.hex
      : props.theme.colors.element.darkGray.hex};
`;

export const Price = styled(SortItem)`
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
`;

export const Size = styled(SortItem)`
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
`;
