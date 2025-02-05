<template lang="pug">
.container
    .main-search
        input(
            type="text"
            :placeholder="placeholder"
            v-model="value"
            autofocus
        )
    .main-content-list
        SearchContent(
            v-for="item in searchData" :key="item.id"
            :item="item"
        )
</template>
<script>
import SearchContent from '@/components/SearchContent.vue'
import { mapState } from "vuex";
export default {
    components: {SearchContent},
    props: ['placeholder'],
    data() {
        return {
            value: ''
        }
    },
    computed: {
        multiData(){
            return this.$store.state['searching/searchData']
        },
        ...mapState('searching', ['searchData'])
    },
    mounted() {
        console.log(this.searchData);
    },
    watch: {
        value(newVal){
            this.$store.dispatch('searching/getSearchData', this.value)
            console.log(newVal);
        }
    }
}
</script>
<style lang="scss">
    
</style>