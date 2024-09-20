import styled from "styled-components";

export const SearchInputContainer = styled.div`
  --size: 18px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: calc(var(--size) / 2 + 8px);
    top: 50%;
    transform: translateY(-50%);
    background: url(images/icons/search.png);
    background-size: contain;
    background-position: center;
    width: var(--size);
    height: var(--size);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 4px;
  border: none;
  outline: none;
  padding-left: calc(var(--size) / 2 + 40px);
  padding-right: 1rem;
  background: ${(props) => props.theme.colors.element.lightGray.hex};
  color: ${(props) => props.theme.colors.text.secondary.hex};

  &::placeholder {
    color: ${(props) => props.theme.colors.element.darkGray.hex};
  }
`;
