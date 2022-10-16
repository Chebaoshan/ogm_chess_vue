import { defineStore, createPinia } from "pinia";

export const pinia = createPinia();

export const useGameStore = defineStore("game", {
  state: () => ({
    count: 0,
    playinfo: "X",
    history: [],
    result: false,
  }),
  actions: {
    setResult() {
      this.result = true;
    },
    addCount() {
      this.count++;
    },
    getCount() {
      return this.count;
    },
    currentPlayer() {
      return this.count % 2 == 0 ? "X" : "O";
    },
    currentHistory() {
      return this.history;
    },
    renewHistory(position) {
      const currentHistory = this.history;
      return (this.history = [
        ...currentHistory,
        {
          currentPosition: position,
          currentInfo: this.currentPlayer(),
          currentCount: this.count,
        },
      ]);
    },
  },
});
