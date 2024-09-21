import { useQuery } from "@tanstack/react-query";
import getHouses from "api/endpoints/house/get-houses";
import { queryKeys } from "lib/query-keys";

export default function useHouseList() {
  return useQuery({
    queryKey: [queryKeys.HOUSES],
    queryFn: getHouses,
  });
}
