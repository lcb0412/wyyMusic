<template>
    <div id="Seachview">
        <searchTop></searchTop>
        <playList></playList>
    </div>    
</template>

<script>
import searchTop from '../components/searchTop.vue'
import playList from '../components/playList.vue'
export default {
    components:{
        searchTop,playList
    }
}
</script>