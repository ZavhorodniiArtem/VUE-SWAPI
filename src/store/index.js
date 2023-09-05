import {createStore} from "vuex";
import {charactersModule} from "@/store/charactersModule";
import {filmsModule} from "@/store/filmsModule";
import {speciesModule} from "@/store/speciesModule";
import {planetsModule} from "@/store/planetsModule";
import {starshipsModule} from "@/store/starshipsModule";
import {vehiclesModule} from "@/store/vehiclesModule";

export default createStore({
  modules: {
    characters: charactersModule,
    films: filmsModule,
    species: speciesModule,
    planets: planetsModule,
    starships: starshipsModule,
    vehicles: vehiclesModule,
  }
})