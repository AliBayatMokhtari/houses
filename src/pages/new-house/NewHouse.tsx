import PageTitle from "components/new-house/page-title/PageTitle";
import { Container } from "./new-house.style";
import NewHouseForm from "components/new-house/new-house-form/NewHouseForm";

export default function NewHouse() {
  return (
    <Container>
      <PageTitle />
      <NewHouseForm />
    </Container>
  );
}
