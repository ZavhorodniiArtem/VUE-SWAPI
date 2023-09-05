<template>
  <div class="wrapper text-white">
    <div class="flex flex-col justify-center items-center mt-8">
      <router-link to="/" class="flex flex-col justify-center items-center">
        <img src="../assets/img/Line.svg" class="mb-2" alt="lineTop">
        <img src="../assets/img/LogoStarWars.svg" alt="logo">
        <h1 class="mb-2">DISCOVERY</h1>
        <img src="../assets/img/Line.svg" alt="lineBottom">
      </router-link>
    </div>

    <div class="flex justify-center items-center mt-[140px] gap-[60px]">
      <div v-for="n in navList" :key="n">
        <router-link
            :to="'/' + n"
            class="flex flex-col justify-center items-center"
            @mouseover="current = n"
            @mouseleave="current = ''"
        >
          <img
              src="../assets/img/icons/LineTitle.png"
              class="mb-5"
              :class="current === n
              ? 'z-0 ease-in duration-450 transition transform -translate-y-7 motion-reduce:transition-none motion-reduce:transform-none'
              : 'z-[-1] ease-out duration-450'"
              alt="lineTop"
          >
          <img :src="require('@/assets/img/icons/'+n+'.svg')" class="logo" :alt="n">
          <h1 class="title">{{n}}</h1>
          <img
              src="../assets/img/icons/LineTitle.png"
              class="mt-5"
              :class="current === n
              ? 'z-0 ease-in duration-450 transition transform translate-y-7 motion-reduce:transition-none motion-reduce:transform-none'
              : 'z-[-1] ease-out duration-450'"
              alt="lineBottom"
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appNavigation",
  data() {
    return {
      current: "",
      navList: ["films", "characters", "species", "planets", "starships", "vehicles"],
    }
  },
}
</script>

<style scoped>
.wrapper {
  background-image: url("../assets/img/nav.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 811px;
}

.title {
  color: #FFF;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.logo {
  width: 100px;
  height: 100px;
}
</style>