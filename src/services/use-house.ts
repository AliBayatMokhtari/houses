import { useQuery } from "@tanstack/react-query";
import getHouse from "api/endpoints/house/get-house";

export default function useHouse(houseId: number) {
  return useQuery({
    queryKey: [houseId],
    queryFn: () => getHouse(houseId),
  });
}
