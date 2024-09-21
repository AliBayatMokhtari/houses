import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 1rem;
`;

export const InnerContainer = styled.div`
  background: ${(props) => props.theme.colors.element.white.hex};
  height: 100%;
  display: flex;
  border-radius: 8px;
`;

export const HouseItemImg = styled.img`
  --size: 110px;
  width: calc(var(--size) + 1rem);
  height: var(--size);
  margin-block: auto;
  margin-left: 1rem;
  border-radius: 8px;
`;

export const Info = styled.div`
  flex: 1;
  padding-block: 1.5rem;
  padding-inline: 1.5rem;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Street = styled.h2`
  line-height: 1.2;
`;

export const Actions = styled.div``;

export const ActionItem = styled.button`
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

export const ActionIcon = styled.img`
  --size: 16px;
  width: var(--size);
  height: var(--size);
`;

export const Price = styled.p`
  line-height: 2;
  color: ${(props) => props.theme.colors.text.secondary.hex};
  font-weight: 600;
`;

export const Address = styled.p`
  color: ${(props) => props.theme.colors.element.darkGray.hex};
`;

export const Features = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`;

export const FeatureItem = styled.div``;

export const FeatureIcon = styled.img`
  --size: 16px;
  width: var(--size);
  height: var(--size);
  display: inline-block;
  vertical-align: middle;
`;

export const FeatureValue = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.text.secondary.hex};
  font-size: 14px;
`;
