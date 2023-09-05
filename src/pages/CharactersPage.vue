<template>
  <div>
    <h1 class="text-white mt-4 text-[32px] font-extrabold">Characters</h1>
    <div class="flex items-center flex-wrap m-6 gap-2">
      <div v-for="c in characters" :key="c.name" class="w-[calc(25%_-_8px)]">
        <card-custom :title="c.name" :sub-title="`gender: ${c.gender}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CardCustom from "@/components/CardCustom.vue";

export default {
  name: 'charactersPage',
  components: {CardCustom},
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      fetchCharacters: 'characters/fetchCharacters'
    }),
  },
  mounted() {
    this.fetchCharacters();
  },
  computed: {
    ...mapState({
      characters: state => state.characters.characters
    }),
  }
}
</script>

<style scoped>

</style>