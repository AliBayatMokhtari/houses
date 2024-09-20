import Filter from "components/house-list/filter/Filter";
import PageTitle from "components/house-list/Page-Title";
import { Container } from "./house-list.style";
import { useCallback, useState } from "react";
import { IFilterContext } from "store/filter-context";
import FilterProvider from "components/providers/FilterProvider";

export default function HouseList() {
  const [filter, setFilterState] = useState<IFilterContext>({
    search: "",
    sort: "price",
  });

  const setFilter = useCallback((value: Partial<IFilterContext>) => {
    setFilterState((old) => ({ ...old, ...value }));
  }, []);

  return (
    <FilterProvider filter={filter} setFilter={setFilter}>
      <Container>
        <PageTitle />
        <Filter />
      </Container>
    </FilterProvider>
  );
}
