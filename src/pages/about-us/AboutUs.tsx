import {
  Container,
  PageTitle,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  SecondSectionDescription,
  DesignAndDevelopmentDescription,
  Logo,
  ByDtt,
  ByDttTitle,
  ByDttLink,
} from "./about-us.style";

export default function AboutUs() {
  return (
    <Container>
      <PageTitle>About</PageTitle>
      <SectionContainer>
        <SectionTitle>About DTT Real State</SectionTitle>
        <SectionDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          dicta, eveniet corporis ex culpa alias optio necessitatibus deleniti
          minus non quo facilis quidem laboriosam esse possimus quam ullam eaque
          recusandae. Repudiandae a ducimus laboriosam provident modi nisi
          molestiae id amet maiores totam exercitationem porro cum eius,
          debitis, libero eveniet. Sunt repellat error sit accusamus quam nobis
          praesentium. Enim, distinctio provident.
        </SectionDescription>
        <SecondSectionDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          fugit est maxime dolore suscipit excepturi, accusantium officia
          quisquam rerum quas tempora id odit nam dicta distinctio natus laborum
          soluta reprehenderit!
        </SecondSectionDescription>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Design And Development</SectionTitle>
        <DesignAndDevelopmentDescription>
          <Logo src="/images/logo.png" />
          <ByDtt>
            <ByDttTitle>By DTT</ByDttTitle>
            <ByDttLink target="_blank" href="http://www.d-tt.nl">
              www.d-tt.nl
            </ByDttLink>
          </ByDtt>
        </DesignAndDevelopmentDescription>
      </SectionContainer>
    </Container>
  );
}
