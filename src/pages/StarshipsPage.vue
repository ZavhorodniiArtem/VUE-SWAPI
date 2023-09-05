<template>
  <div>
    <h1 class="text-white mt-4 text-[32px] font-extrabold">Starships</h1>
    <div class="flex items-center flex-wrap m-6 gap-2">
      <div v-for="s in starships" :key="s.name" class="w-[calc(25%_-_8px)]">
        <card-custom :title="s.name" :sub-title="`model: ${s.model}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CardCustom from "@/components/CardCustom.vue";

export default {
  name: 'starshipsPage',
  components: {CardCustom},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      fetchStarships: 'starships/fetchStarships'
    }),
  },
  mounted() {
    this.fetchStarships();
  },
  computed: {
    ...mapState({
      starships: state => state.starships.starships
    }),
  }
}
</script>

<style scoped>
</style>