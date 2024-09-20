import request from "api/base/request";

export default function uploadImage(houseId: number, body: FormData) {
  return request.post(`/houses/${houseId}/upload`, body);
}
