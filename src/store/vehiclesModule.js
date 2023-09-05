import axios from "axios";

export const vehiclesModule = {
  state: () => ({
    vehicles: [],
    count: 0,
    loading: false
  }),
  getters: {},
  mutations: {
    setVehicles(state, vehicle) {
      state.vehicles = vehicle;
    },
    setCount(state, count) {
      state.count = count;
    },
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    async fetchVehicles({commit}) {
      try {
        commit('setLoading', true)
        const res = await axios.get('https://swapi.dev/api/vehicles');
        commit("setVehicles", res.data.results)
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