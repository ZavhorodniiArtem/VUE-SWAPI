<template>
  <div class="flex flex-col app">
    <app-navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";

export default {
  components: {
    AppNavigation
  }
}
</script>

<style>
  .app {
    background: #1E1E1E;

  }
</style>
