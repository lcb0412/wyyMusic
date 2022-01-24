<template>
  <div class="listlist">
    <div class="list_top">
      <div class="top_left">云音乐特色榜</div>
    </div>
    <div class="listcontent">
        <router-link class="contentblock" v-for="(item,index) in temps.list" :to="{path:'/toListDet',query:{id:item.id}}" >
            <img class="blockimg" :src="item.coverImgUrl" />
            <div class="blockname">
                {{  item.name }}
            </div>
        </router-link >
    </div>
  </div>
</template>

<script>
import { playlisthot } from "../api/index.js";
import { onBeforeMount, onMounted, onUpdated, reactive } from "vue";
export default {
  setup() {
    let temps = reactive([])
    onMounted( async () =>{
        let temp = await playlisthot()
        console.log('temp',temp)
        let temp1 = temp.data.list.slice(0,4)
        temp1.splice(2,1)
        temps.list = [...temp1]
        console.log('temps',temps)
    })
    return {
      temps
    };
  },
};
</script>

<style scoped lang="less">
.listlist {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 7.5rem;
  height: auto;
  padding: 0.3rem;
  .list_top {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .top_left {
      font-weight: bold;
    }
  }
  .listcontent{
      width: 100%;
      margin-top: 0.3rem;
      height: auto;
      display: flex;
      justify-content: space-between;
      .contentblock{
          width: 2.2rem;
          height: 2.2rem;
          text-decoration: none;
          color: black;
          .blockimg{
              width: 100%;
              height: 100%;
              border-radius: 0.15rem;
          }
          .blockname{
              text-align: center;
              font-size: 0.2rem;
          }
      }
  }
}
</style>

