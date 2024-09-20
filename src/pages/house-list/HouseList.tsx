import Filter from "components/house-list/filter/Filter";
import PageTitle from "components/house-list/Page-Title";
import { Container } from "./house-list.style";

export default function HouseList() {
  return (
    <Container>
      <PageTitle />
      <Filter />
    </Container>
  );
}
