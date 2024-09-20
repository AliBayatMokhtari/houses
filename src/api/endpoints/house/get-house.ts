import request from "api/base/request";

export default function getHouse(houseId: number) {
  return request.get(`/houses/${houseId}`);
}
