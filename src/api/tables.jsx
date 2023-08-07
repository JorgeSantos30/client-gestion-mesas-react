import { instance } from "./base.api";

const endpoint = "/tables";

export const tables = {
  getAll: function () {
    return instance.get(endpoint);
  },
};
