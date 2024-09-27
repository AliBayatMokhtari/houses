import request from "api/base/request";

export default function registerUser(payload: FormData) {
  return request.post("/register", payload);
}
