import { ChangeEvent, useMemo, useState } from "react";
import { ClearIcon, SearchInput, SearchInputContainer } from "./filter.style";
import Sort, { SortValue } from "./ Sort";
import { useFilter, useFilterActions } from "store/filter-context";
import debouncedFn from "lib/debounced-fn";

export default function Filter() {
  const filter = useFilter();
  const { setFilter } = useFilterActions();
  const [search, setSearch] = useState(filter.search);

  function onSearchChange(value: string) {
    setFilter({
      search: value,
    });
  }

  function onSortChange(value: SortValue) {
    setFilter({
      sort: value,
    });
  }

  const debouncedOnSearchChange = useMemo(
    () => debouncedFn(onSearchChange, 300),
    []
  );

  return (
    <div>
      <SearchInputContainer>
        <SearchInput
          placeholder="Search for a house"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            setSearch(value);
            debouncedOnSearchChange(value);
          }}
        />
        {filter.search && (
          <ClearIcon
            src="images/icons/clear.png"
            onClick={() => onSearchChange("")}
          />
        )}
      </SearchInputContainer>
      <Sort value={filter.sort} onChange={onSortChange} />
    </div>
  );
}
