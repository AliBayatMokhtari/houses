import { apiKey, apiBaseUrl } from "lib/env";

export default function createClient() {
  const defaultHeaders = {
    ["X-Api-Key"]: apiKey,
  };

  return {
    fetch(url: string, { headers, ...restInit }: RequestInit = {}) {
      return fetch(apiBaseUrl + url, {
        headers: {
          ...defaultHeaders,
          ...headers,
        },
        ...restInit,
      });
    },
  };
}
