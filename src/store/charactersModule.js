import axios from "axios";

export const charactersModule = {
  state: () => ({
    characters: [],
    count: 0,
    loading: false
  }),
  getters: {},
  mutations: {
    setCharacters(state, character) {
      state.characters = character;
    },
    setCount(state, count) {
      state.count = count;
    },
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    async fetchCharacters({commit}) {
      try {
        commit('setLoading', true)
        const res = await axios.get('https://swapi.dev/api/people');
        commit("setCharacters", res.data.results)
        commit('setCount', res.data.count)
        commit('setLoading', false)
      } catch (e) {
        console.log("err", e)
        commit('setLoading', false)
      } finally {
        commit('setLoading', false)
      }
    }
  },
  namespaced: true
}