const counterStore = {
  state: () => ({
    counter: 0,
  }),
  mutations: {
    changeCounter(state, data) {
      state.counter = data;
    },
  },
  actions: {
    increaseCounter({commit}, ) {
      commit('increaseCounter', state.counter + 1)
    }
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
  },
};

export default counterStore;
