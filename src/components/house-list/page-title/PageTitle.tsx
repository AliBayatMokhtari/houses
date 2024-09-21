import IconButton from "components/common/icon-button/IconButton";
import {
  ActionContainer,
  Container,
  Space,
  StyledSpinner,
  Title,
} from "./page-title.style";
import { Link } from "react-router-dom";
import { routes } from "router/routes";

interface IPageTitleProps {
  loading: boolean;
}

export default function PageTitle({ loading }: IPageTitleProps) {
  return (
    <Container>
      <Space />
      <Title>Houses {loading && <StyledSpinner />}</Title>
      <ActionContainer>
        <Link to={routes.newHouse}>
          <IconButton icon="images/icons/plus-filled.png" />
        </Link>
      </ActionContainer>
    </Container>
  );
}
