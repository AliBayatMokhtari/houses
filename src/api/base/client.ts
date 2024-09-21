import { apiKey, apiBaseUrl } from "lib/env";

export default function createClient() {
  const defaultHeaders = {
    ["X-Api-Key"]: apiKey,
  };

  return {
    async fetch(url: string, { headers, ...restInit }: RequestInit = {}) {
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
