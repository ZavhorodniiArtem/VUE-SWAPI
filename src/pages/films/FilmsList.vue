<template>
  <div v-if="loading" class="h-screen">
    <h1 class="text-white text-[32px]">Loading...</h1>
  </div>
  <div v-else>
    <h1 class="text-white mt-4 text-[32px] font-extrabold">Films</h1>
    <div class="flex items-center flex-wrap m-6 gap-2">
      <div v-for="(f, i) in films" :key="f.title" class="w-[calc(25%_-_8px)]">
        <router-link :to="`/films/${i+1}`">
          <card-custom :title="f.title" :sub-title="`director: ${f.director}`"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CardCustom from "@/components/CardCustom.vue";

export default {
  name: "FilmsList",
  components: {CardCustom},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      fetchFilms: 'films/fetchFilms'
    }),
  },
  mounted() {
    this.fetchFilms();
  },
  computed: {
    ...mapState({
      films: state => state.films.films,
      loading: state => state.films.loading
    }),
  }
}
</script>

<style scoped>

</style>