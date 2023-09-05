<template>
  <div>
    <h1 class="text-white mt-4 text-[32px] font-extrabold">Species</h1>
    <div class="flex items-center flex-wrap m-6 gap-2">
      <div v-for="s in species" :key="s.name" class="w-[calc(25%_-_8px)]">
        <card-custom :title="s.name" :sub-title="`designation: ${s.designation}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import CardCustom from "@/components/CardCustom.vue";

export default {
  name: 'speciesPage',
  components: {CardCustom},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      fetchSpecies: 'species/fetchSpecies'
    }),
  },
  mounted() {
    this.fetchSpecies();
  },
  computed: {
    ...mapState({
      species: state => state.species.species
    }),
  }
}
</script>

<style scoped>

</style>