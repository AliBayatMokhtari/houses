import request from "api/base/request";

export default function createHouse(body: FormData) {
  return request.post("/houses", body);
}
