<template>
  <div>
    <h1 class="text-white mt-4 text-[32px] font-extrabold">Plants</h1>
    <div class="flex items-center flex-wrap m-6 gap-2">
      <div v-for="p in planets" :key="p.name" class="w-[calc(25%_-_8px)]">
        <card-custom :title="p.name" :sub-title="`population: ${p.population}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import CardCustom from "@/components/CardCustom.vue";

export default {
  name: 'planetsPage',
  components: {CardCustom},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      fetchPlants: 'planets/fetchPlanets'
    }),
  },
  mounted() {
    this.fetchPlants();
  },
  computed: {
    ...mapState({
      planets: state => state.planets.planets
    }),
  }
}
</script>

<style scoped>

</style>