import { defineStore } from 'pinia';

export const piniaRootStore = defineStore('root', {
  state: () => ({
    message: 'Hello from Pinia!'
  }),
  actions: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
    }
  }
});