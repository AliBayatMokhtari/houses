export const storageKeys = {
  apiToken: "apiToken",
} as const;

type Key = keyof typeof storageKeys;
export type StorageKey = (typeof storageKeys)[Key];

export interface IStorageClient {
  get: <V>(key: StorageKey) => V | null;
  set: <V>(key: StorageKey, value: V) => void;
}

const createStorageClient = (client: Storage): IStorageClient => {
  return {
    get<V>(key: StorageKey) {
      return client.getItem(key) as V | null;
    },
    set<V>(key: StorageKey, value: V) {
      client.setItem(
        key,
        typeof value !== "string" ? JSON.stringify(value) : value
      );
    },
  };
};

export const storage = {
  localStorage: createStorageClient(localStorage),
  sessionStorage: createStorageClient(sessionStorage),
};
