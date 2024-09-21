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
  cursor: pointer;
`;

export const HouseItemImg = styled.img`
  --size: 110px;
  width: calc(var(--size) + 1rem);
  height: var(--size);
  margin-block: auto;
  margin-left: 1rem;
  border-radius: 8px;
`;

export const Info = styled.div<{ $madeByMe: boolean }>`
  flex: 1;
  padding-block: 1.5rem;
  padding-inline: 1.5rem;
  position: relative;
  bottom: ${(props) => (props.$madeByMe ? 1 : 0)}rem;
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
