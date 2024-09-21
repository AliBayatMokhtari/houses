import { Link } from "react-router-dom";
import { Container, StyledBackIconButton, Title } from "./page-title.style";

export default function PageTitle() {
  return (
    <Container>
      <Title>Create new listing</Title>
      <Link to={".."}>
        <StyledBackIconButton />
      </Link>
    </Container>
  );
}
