import styled from "styled-components";

export const HouseImg = styled.img`
  width: 100%;
  max-height: 350px;
`;

export const Details = styled.div`
  --icon-size: 16px;
  --radius: 23px;
  padding-top: 1.5rem;
  padding-inline: 1.5rem;
  border-top-right-radius: var(--radius);
  border-top-left-radius: var(--radius);
  position: relative;
  top: -2rem;
  background-color: ${(props) => props.theme.colors.element.white.hex};
`;

export const Title = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
`;

export const DetailsRow = styled.div`
  margin-top: 1.2rem;
  display: flex;
  gap: 1.5rem;
`;

export const DetailsRowItem = styled.div``;

export const DetailsIcon = styled.img`
  width: var(--icon-size);
  height: var(--icon-size);
  display: inline-block;
  vertical-align: middle;
`;

export const DetailsLbl = styled.p`
  display: inline-block;
  margin-left: 0.5rem;
  vertical-align: middle;
  font-family: Montserrat;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.secondary.hex};
`;

export const LocationIcon = styled(DetailsIcon)`
  height: calc(var(--icon-size) + 2px);
`;

export const GarageIcon = styled(DetailsIcon)`
  margin-bottom: 2px;
`;

export const GarageLbl = styled(DetailsLbl)`
  margin-top: 1px;
`;

export const Description = styled.p`
  margin-top: 1.2rem;
  padding-bottom: 1.2rem;
  color: ${(props) => props.theme.colors.text.secondary.hex};
`;
