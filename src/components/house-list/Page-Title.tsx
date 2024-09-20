import {
  ActionContainer,
  Container,
  PlusIcon,
  Space,
  Title,
} from "./page-title.style";

export default function PageTitle() {
  return (
    <Container>
      <Space />
      <Title>Houses</Title>
      <ActionContainer>
        <PlusIcon src="images/icons/plus-filled.png" />
      </ActionContainer>
    </Container>
  );
}
