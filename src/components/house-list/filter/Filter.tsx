import { SearchInput, SearchInputContainer } from "./filter.style";

export default function Filter() {
  return (
    <div>
      <SearchInputContainer>
        <SearchInput placeholder="Search for a house" />
      </SearchInputContainer>
    </div>
  );
}
