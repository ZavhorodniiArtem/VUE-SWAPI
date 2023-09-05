<template>
  <div>
    <h1 class="text-white mt-4 text-[32px] font-extrabold">Vehicles</h1>
    <div class="flex items-center flex-wrap m-6 gap-2">
      <div v-for="v in vehicles" :key="v.name" class="w-[calc(25%_-_8px)]">
        <card-custom :title="v.name" :sub-title="`model: ${v.model}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import CardCustom from "@/components/CardCustom.vue";

export default {
  name: 'vehiclesPage',
  components: {CardCustom},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      fetchVehicles: 'vehicles/fetchVehicles'
    }),
  },
  mounted() {
    this.fetchVehicles();
  },
  computed: {
    ...mapState({
      vehicles: state => state.vehicles.vehicles
    }),
  }
}
</script>

<style scoped>

</style>