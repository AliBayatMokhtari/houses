import request from "api/base/request";
import { IHouse } from "models/house";

export default function getHouses(): Promise<IHouse[]> {
  return request.get("/houses");
}
