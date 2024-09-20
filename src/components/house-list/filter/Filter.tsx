import { ChangeEvent } from "react";
import { ClearIcon, SearchInput, SearchInputContainer } from "./filter.style";

export interface IFilterOnChangeParams {
  value: string;
  key: "search" | "sort";
}
interface IFilterProps {
  searchKeyword: string;
  onChange(params: IFilterOnChangeParams): void;
}

export default function Filter({ searchKeyword, onChange }: IFilterProps) {
  function onSearchChange(value: string) {
    onChange({
      key: "search",
      value,
    });
  }

  return (
    <div>
      <SearchInputContainer>
        <SearchInput
          placeholder="Search for a house"
          value={searchKeyword}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
        />
        {searchKeyword && (
          <ClearIcon
            src="images/icons/clear.png"
            onClick={() => onSearchChange("")}
          />
        )}
      </SearchInputContainer>
    </div>
  );
}
