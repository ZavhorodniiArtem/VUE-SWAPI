import MainApp from "@/pages/MainApp.vue";
import {createRouter, createWebHistory} from "vue-router";
import PlanetsPage from "@/pages/PlanetsPage.vue";
import SpeciesPage from "@/pages/SpeciesPage.vue";
import VehiclesPage from "@/pages/VehiclesPage.vue";
import StarshipsPage from "@/pages/StarshipsPage.vue";
import CharactersPage from "@/pages/CharactersPage.vue";
import FilmsList from "@/pages/films/FilmsList.vue";
import FilmPage from "@/pages/films/FilmPage.vue";

const routes = [
  {
    path: "/",
    component: MainApp
  },
  {
    path: "/films",
    component: FilmsList
  },
  {
    path: "/films/:id",
    component: FilmPage
  },
  {
    path: "/characters",
    component: CharactersPage
  },
  {
    path: "/species",
    component: SpeciesPage
  },
  {
    path: "/planets",
    component: PlanetsPage
  },
  {
    path: "/starships",
    component: StarshipsPage
  },
  {
    path: "/vehicles",
    component: VehiclesPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;