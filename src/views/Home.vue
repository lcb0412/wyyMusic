<template>
  <div class="home" >
    <tonav></tonav>
    <swiperCom></swiperCom>
    <iconList></iconList>
    <musiclist></musiclist>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import tonav from "@/components/toNav.vue";
import swiperCom from "@/components/swiperCom.vue";
import iconList from '@/components/iconList.vue';
import musiclist from '@/components/musiclist.vue';
import {onMounted,inject} from 'vue'

  
  


export default {
  name: "Home",
  components: {
    tonav,swiperCom,iconList,musiclist
  },
  setup() {
    

  },
  

  
  
};


</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 0.3rem;
}
.home{
  margin: 0 auto 1.5rem;
}

</style>
