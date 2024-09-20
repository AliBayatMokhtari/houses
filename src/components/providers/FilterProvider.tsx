import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import {
  FilterContext,
  FilterActionsContext,
  IFilterContext,
  IFilterContextActions,
} from "store/filter-context";

interface IFilterProviderProps
  extends PropsWithChildren<
    { filter: IFilterContext } & IFilterContextActions
  > {}

export default function FilterProvider({
  children,
  filter,
  setFilter,
}: IFilterProviderProps) {
  const setFilterActions = useMemo(() => ({ setFilter }), [setFilter]);

  return (
    <FilterActionsContext.Provider value={setFilterActions}>
      <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
    </FilterActionsContext.Provider>
  );
}
