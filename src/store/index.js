import { createStore } from 'vuex'
import popularMovies from '@/store/modules/popularMovies'
import upcoming from '@/store/modules/upcoming'
import tv from '@/store/modules/tv'
import movie from '@/store/modules/movie'
import popularTvs from '@/store/modules/popularTvs'
import topRated from '@/store/modules/topRated'
import searching from '@/store/modules/searching'
import actors from '@/store/modules/actors'
export default createStore({
  state: {
    apiKey: '71cb2676f355bd5674fbe977b8b7fb4b',
    imageFullUrl: 'https://image.tmdb.org/t/p/original/',
    imageUrl: 'https://image.tmdb.org/t/p/w500/',
  },
  modules: {
    popularMovies, upcoming, movie, popularTvs, tv, topRated, searching , actors
  }
})
