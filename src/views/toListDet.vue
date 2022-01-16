<template>
  <div class="tolistdet">
    <listViewTop :msg="msg"></listViewTop>
    <playList :msg="msg"></playList>
  </div>
</template>

<script>
import listViewTop from "../components/listViewTop.vue";
import playList from "../components/playList.vue";
import playerControler from '../components/playerControler.vue'
import { getPlayList } from "../api/index.js";
import { reactive, onMounted, inject } from "vue";
import { useRoute } from "vue-router";
//useRoute() 相当于Vue 2 的this.$route
export default {
  components: {
    listViewTop,playList,playerControler
  },
  setup() {
     let msg = reactive({ 
          detail:{},
      });
      const musicplay = inject('musicplay')
    onMounted(async () => {
      console.log(useRoute().query.id);
      let id = useRoute().query.id;
      //没接收到 [[PromiseResult]]的值,取不到res中data的值
      // let res = getPlayList(id)
      // console.log(res)
      //加入一个then()
      // 通过传入箭头函数作为参数，即可在res变量接收到 [[PromiseResult]]的值
      getPlayList(id).then((res) => {
        musicplay.updata('List',res.data.playlist)
        msg.detail=musicplay.val.List
        // console.log('1',msg)
      });
    });
   return{
       msg
   }
  },
};
</script>


<style lang="less" scoped>
* {
    margin: 0 auto;

}


</style>