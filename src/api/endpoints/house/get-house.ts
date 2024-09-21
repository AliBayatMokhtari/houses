import request from "api/base/request";
import { IHouse } from "models/house";

export default async function getHouse(houseId: number): Promise<IHouse> {
  const response = await request.get(`/houses/${houseId}`);
  return response[0];
}
