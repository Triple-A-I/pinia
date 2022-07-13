import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return { name: "Albraa A Ahmed", age:25};
  },
});
