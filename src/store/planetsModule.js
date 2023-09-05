import axios from "axios";

export const planetsModule = {
  state: () => ({
    planets: [],
    count: 0,
    loading: false
  }),
  getters: {},
  mutations: {
    setPlanets(state, planet) {
      state.planets = planet;
    },
    setCount(state, count) {
      state.count = count;
    },
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    async fetchPlanets({commit}) {
      try {
        commit('setLoading', true)
        const res = await axios.get('https://swapi.dev/api/planets');
        commit("setPlanets", res.data.results)
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