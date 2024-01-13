import { defineStore } from "pinia";

export const useSession = defineStore('session', {
  persist: true,
  state: () => {
    return {
        activeButton: 'hey',
    }
  },
  actions: {
    switchComponent(context, targetComponent) {
        context.commit('setActiveButton', targetComponent);
        context.emit('switch-component', targetComponent);
      },
  }
})