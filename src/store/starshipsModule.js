import axios from "axios";

export const starshipsModule = {
  state: () => ({
    starships: [],
    count: 0,
    loading: false
  }),
  getters: {},
  mutations: {
    setStarships(state, ships) {
      state.starships = ships;
    },
    setCount(state, count) {
      state.count = count;
    },
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    async fetchStarships({commit}) {
      try {
        commit('setLoading', true)
        const res = await axios.get('https://swapi.dev/api/starships');
        commit("setStarships", res.data.results)
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