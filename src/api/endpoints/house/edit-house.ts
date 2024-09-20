import request from "api/base/request";

export default function editHouse(houseId: string, body: FormData) {
  return request.post(`/houses/${houseId}`, body);
}
