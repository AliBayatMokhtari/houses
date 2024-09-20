import request from "api/base/request";

export default function deleteHouse(houseId: number) {
  return request.delete(`/houses/${houseId}`);
}
