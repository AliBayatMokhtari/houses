import { useState } from "react";
import { storage, IStorageClient, StorageKey } from "./storage";

interface UsePersistedStateOptions<T> {
  storageClient: IStorageClient;
}

type SetterFn<T> = (oldValue: T) => T;

export default function usePersistedState<T>(
  key: StorageKey,
  initialValue: T,
  options: Partial<UsePersistedStateOptions<T>> = {}
): [T, (val: T | SetterFn<T>) => void] {
  const { storageClient = storage.localStorage } = options;
  const [state, setState] = useState(
    () => storageClient.get<T>(key) ?? initialValue
  );

  function setStorage(value: T) {
    storageClient.set(key, value);
  }

  function _setState(val: T | SetterFn<T>) {
    setState((oldValue) => {
      if (typeof val === "function") {
        const newValue = (val as SetterFn<T>)(oldValue);
        setStorage(newValue);
        return newValue;
      } else {
        setStorage(val);
        return val;
      }
    });
  }

  return [state, _setState];
}
