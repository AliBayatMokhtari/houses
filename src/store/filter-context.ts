import throwMissingProvider from "lib/throw-missing-provider";
import { createContext, useContext } from "react";

export interface IFilterContext {
  search: string;
  sort: "price" | "size";
}

export interface IFilterContextActions {
  setFilter(val: Partial<IFilterContext>): void;
}

export const FilterContext = createContext<IFilterContext>({
  search: "",
  sort: "price",
});

export const FilterActionsContext = createContext<IFilterContextActions>({
  setFilter() {},
});

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) throwMissingProvider("<FilterProvider />");

  return context;
}

export function useFilterActions() {
  const context = useContext(FilterActionsContext);

  if (!context) throwMissingProvider("<FilterProvider />");

  return context;
}
