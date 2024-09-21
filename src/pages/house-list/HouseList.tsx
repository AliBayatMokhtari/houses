import Filter from "components/house-list/filter/Filter";
import List from "components/house-list/list/List";
import PageTitle from "components/house-list/Page-Title";
import FilterProvider from "components/providers/FilterProvider";
import { useCallback, useState } from "react";
import useHouseList from "services/use-house-list";
import { IFilterContext } from "store/filter-context";
import { Container, FullLoading, FullLoadingTitle } from "./house-list.style";
import LoadingSpinner from "components/common/loading-spinner/LoadingSpinner";

export default function HouseList() {
  const { data, isFetching, isLoading, error } = useHouseList();
  const [filter, setFilterState] = useState<IFilterContext>({
    search: "",
    sort: "price",
  });

  const setFilter = useCallback((value: Partial<IFilterContext>) => {
    setFilterState((old) => ({ ...old, ...value }));
  }, []);

  if (isLoading)
    return (
      <FullLoading>
        <LoadingSpinner size={100} />
        <FullLoadingTitle>Loading Houses...</FullLoadingTitle>
      </FullLoading>
    );

  if (error || !data) return <div>Something went wrong...</div>;

  if (!data.length) return <div>Empty View...</div>;

  return (
    <FilterProvider filter={filter} setFilter={setFilter}>
      <Container>
        <PageTitle loading={isFetching} />
        <Filter />
        <List data={data} />
      </Container>
    </FilterProvider>
  );
}
