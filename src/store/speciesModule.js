import axios from "axios";

export const speciesModule = {
  state: () => ({
    species: [],
    count: 0,
    loading: false
  }),
  getters: {},
  mutations: {
    setSpecies(state, specs) {
      state.species = specs;
    },
    setCount(state, count) {
      state.count = count;
    },
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    async fetchSpecies({commit}) {
      try {
        commit('setLoading', true)
        const res = await axios.get('https://swapi.dev/api/species');
        commit("setSpecies", res.data.results)
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