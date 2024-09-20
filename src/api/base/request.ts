import createClient from "./client";

const client = createClient();

function get(url: string) {
  return client.fetch(url, {
    method: "GET",
  });
}

function post<B extends object | FormData>(url: string, body: B) {
  return client.fetch(url, {
    method: "POST",
    body: body instanceof FormData ? body : JSON.stringify(body),
  });
}

function remove(url: string) {
  return client.fetch(url, {
    method: "DELETE",
  });
}

export default {
  get,
  post,
  delete: remove,
};
