import { ChangeEvent } from "react";
import { ClearIcon, SearchInput, SearchInputContainer } from "./filter.style";
import Sort, { SortValue } from "./ Sort";
import { useFilter, useFilterActions } from "store/filter-context";

export default function Filter() {
  const filter = useFilter();
  const { setFilter } = useFilterActions();

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

  return (
    <div>
      <SearchInputContainer>
        <SearchInput
          placeholder="Search for a house"
          value={filter.search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
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
