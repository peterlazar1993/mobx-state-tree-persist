import { Storage } from "../src";

const store = new Map();
export const testStorage: Storage & { clearStore: () => void } = {
  setItem: (key: string, data: string) => {
    store.set(key, data);
  },
  getItem: (key: string) => {
    return store.get(key);
  },
  clearStore: () => {
    store.clear();
  },
};
