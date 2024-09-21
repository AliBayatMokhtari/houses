import IconButton from "components/common/icon-button/IconButton";
import {
  ActionContainer,
  Container,
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
        <IconButton icon="images/icons/plus-filled.png" />
      </ActionContainer>
    </Container>
  );
}
