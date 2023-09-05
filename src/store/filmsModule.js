import axios from "axios";

export const filmsModule = {
  state: () => ({
    films: [],
    count: 0,
    loading: false
  }),
  getters: {},
  mutations: {
    setFilms(state, film) {
      console.log("film", film)
      state.films = film;
    },
    setCount(state, count) {
      state.count = count;
    },
    setLoading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    async fetchFilms({commit}, id) {
      try {
        commit('setLoading', true)
        const res = await axios.get(`https://swapi.dev/api/films/${id || ""}`);
        commit("setFilms", id ? res.data : res.data.results)
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