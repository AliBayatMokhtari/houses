import {
  ActionContainer,
  Container,
  PlusIcon,
  Space,
  StyledSpinner,
  Title,
} from "./page-title.style";

interface IPageTitleProps {
  loading: boolean;
}

export default function PageTitle({ loading }: IPageTitleProps) {
  return (
    <Container>
      <Space />
      <Title>Houses {loading && <StyledSpinner />}</Title>
      <ActionContainer>
        <PlusIcon src="images/icons/plus-filled.png" />
      </ActionContainer>
    </Container>
  );
}
