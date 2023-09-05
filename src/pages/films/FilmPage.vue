<template>
  <div class="wrapper p-4">
    <h1 class="flex mt-12 ml-24 text-white text-[48px] font-extrabold">{{ film.title }}</h1>

    <div class="flex items-center border-2 border-amber-50 max-w-screen-sm cursor-pointer mt-24">
      <h1 class="ml-3 text-white text-[24px] font-extrabold pr-2">Starships</h1>
      <swiper :space-between="10">
        <swiper-slide v-for="f in film.starships" :key="f">
          <p class="text-white">{{f}}</p>
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex items-center border-2 border-amber-50 max-w-screen-sm cursor-pointer my-12">
      <h1 class="ml-3 text-white text-[24px] font-extrabold pr-2">Planets</h1>
      <swiper :space-between="10">
        <swiper-slide v-for="f in film.planets" :key="f">
          <p class="text-white">{{f}}</p>
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex items-center border-2 border-amber-50 max-w-screen-sm cursor-pointer my-12">
      <h1 class="ml-3 text-white text-[24px] font-extrabold pr-2">Characters</h1>
      <swiper :space-between="10">
        <swiper-slide v-for="f in film.characters" :key="f">
          <p class="text-white">{{f}}</p>
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex items-center border-2 border-amber-50 max-w-screen-sm cursor-pointer my-12">
      <h1 class="ml-3 text-white text-[24px] font-extrabold pr-2">Species</h1>
      <swiper :space-between="10">
        <swiper-slide v-for="f in film.species" :key="f">
          <p class="text-white">{{f}}</p>
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex items-center border-2 border-amber-50 max-w-screen-sm cursor-pointer my-12">
      <h1 class="ml-3 text-white text-[24px] font-extrabold pr-2">Vehicles</h1>
      <swiper :space-between="10">
        <swiper-slide v-for="f in film.vehicles" :key="f">
          <p class="text-white">{{f}}</p>
        </swiper-slide>
      </swiper>
    </div>
    {{ console.log("film", film) }}
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: "FilmPage",
  data() {
    return {}
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    ...mapActions({
      fetchFilms: 'films/fetchFilms'
    }),
  },
  mounted() {
    this.fetchFilms(1);
  },
  computed: {
    ...mapState({
      film: state => state.films.films
    }),
  }
}
</script>

<style scoped>
.wrapper {
  background-image: url("../../assets/img/filmbg.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 811px;
}
</style>