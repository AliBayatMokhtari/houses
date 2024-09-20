import Filter, {
  IFilterOnChangeParams,
} from "components/house-list/filter/Filter";
import PageTitle from "components/house-list/Page-Title";
import { Container } from "./house-list.style";
import { useState } from "react";

export default function HouseList() {
  const [search, setSearch] = useState("");

  function onFilterChange({ key, value }: IFilterOnChangeParams) {
    if (key === "search") setSearch(value);
  }

  return (
    <Container>
      <PageTitle />
      <Filter searchKeyword={search} onChange={onFilterChange} />
    </Container>
  );
}
