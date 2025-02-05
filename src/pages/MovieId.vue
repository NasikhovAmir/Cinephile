<template lang="pug">
.main-info(v-if='movie') 
    img(:src="imageFullUrl + movie.backdrop_path", alt="alt")
    .main-info-block() 
        .main-info-content
            .main-info-content-block 
                h2 {{movie.title}}
                p {{movie.overview}}
                p.date  
                    span {{new Date(movie.release_date).getFullYear() }},
                    span(v-for="genre in movie.genres" :key="genre.id")   {{genre.name}}
                .actors 
                    
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
    props:['selectedId', 'selectedMovie', 'index', 'page'],
    computed: {
        ...mapState(['imageFullUrl']),
        ...mapState('movie', ['movie'])
    },
    methods:{ 
        ...mapActions('movie', ['getMovieById'])
    },
    async mounted(){
       await this.getMovieById(this.$route.params.id)
    }
}
</script>
<style lang="scss" scoped>
    .main-info{
        height: 700px;
        margin-top: 100px;
        >img{
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 70%;
            z-index: -1;
            cursor: default;
        }
    }
</style>