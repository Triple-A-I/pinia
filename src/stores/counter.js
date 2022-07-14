import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { counter: 0 };
  },
  getters: {
    getCounter() {
      return this.counter;
    },
    getDoubleCounter: (state) => state.counter * 2,
    getTrippleCounter() {
      return this.getCounter * 3;
    },
    multiplyBy: (state) => (number) => state.counter * number,
  },
  actions: {
    increment() {
      this.counter++
    },
  },
});
