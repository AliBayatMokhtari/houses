import request from "api/base/request";

export default function getHouses() {
  return request.get("/houses");
}
