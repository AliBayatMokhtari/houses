import styled from "styled-components";

export const Container = styled.main`
  padding-inline: 16px;
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin-top: 16px;
`;

export const SectionContainer = styled.div`
  margin-top: 48px;
`;

export const SectionTitle = styled.h2`
  margin-block: 8px;
`;

export const SectionDescription = styled.p`
  color: ${(props) => props.theme.colors.text.secondary.hex};
  font-size: 14px;
`;

export const SecondSectionDescription = styled(SectionDescription)`
  margin-top: 24px;
`;

export const DesignAndDevelopmentDescription = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.colors.text.secondary.hex};
`;

export const Logo = styled.img`
  width: 105px;
  height: 36px;
`;

export const ByDtt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ByDttTitle = styled.p`
  font-size: 14px;
  line-height: 1;
`;

export const ByDttLink = styled.a`
  color: ${(props) => props.theme.colors.text.hyperlink.hex};
  font-size: 13px;
`;
