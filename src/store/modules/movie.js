import axios from "axios"
export default {
    namespaced: true,
    state: {
        path: 'https://api.themoviedb.org/3/movie/',
        movie: null
    },
    mutations: {
        getMovieById(state, payload){
            state.movie = payload
        }
    },
    actions: {
       async getMovieById({commit, state, rootState}, movieId){
            try {
                const res = await axios.get(`${state.path}${movieId}?api_key=${rootState.apiKey}&language=ru-RU&page=1`)
                const results = res.data
                commit('getMovieById', results)
                console.log(results);
            } catch (error) {
                console.log('Ошибка при получении фильма по id...', error);
            }
        }
    },
    getters: {}
}