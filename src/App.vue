<template>
  <playerControler ></playerControler>
  <router-view/>
</template>

<script>
import playerControler from './components/playerControler.vue';
import {provide,reactive} from 'vue';
export default {
  components:{
    playerControler,
  },
  setup() {

    const musicplay=reactive({
      List:[],
      index:0,
      id:0,
      uname:'',
      imgurl:'',
      isplaying:false,
      curtime:0
    })
    const updata= (key, val)=> {
      musicplay[key] = val
    }

    provide('musicplay',{
      val:musicplay,
      updata
    })

    return{
      musicplay
    }
  },


}
</script>


<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0.3rem;
  }

</style>
