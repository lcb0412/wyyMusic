<template>
  <div class="newmusic">
    <div class="newmusictop">
      <div class="bg"></div>
      <div class="return" @click="$router.go(-1)">
        <strong>&nbsp; ＜ &nbsp; </strong>
      </div>
      <div class="title">新歌榜</div>
    </div>

    <playList></playList>
  </div>
</template>

<script>
import playList from "../components/playList.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import { gettopsong } from "../api/index.js";
import { inject } from "vue";

export default {
  components: {
    playList,
  },
  setup() {
    const musicplay = inject("musicplay");
    const router = useRouter();
    let tempList = [];
    onMounted(async () => {
      console.log(router.currentRoute.value.query.type);
      await gettopsong(router.currentRoute.value.query.type).then((res) => {
        console.log(res.data);
        for (let i = 0; i < res.data.data.length; i++) {
          tempList[i] = res.data.data[i];
        }
        console.log(tempList);
        musicplay.updata("List", { trackIds: tempList });
        console.log(musicplay.val.List);
      });
    });
    return { router, musicplay, tempList };
  },
};
</script>


<style lang="less" scoped>
* {
  margin: 0 auto;
}
.newmusic {
  width: 7.5rem;
  height: auto;
  .newmusictop {
    width: 100%;
    height: 1.5rem;
    position: relative;
    .bg {
      width: 100%;
      height: 150%;
      background: crimson;
      z-index: -1;
      position: absolute;
    }
    .return {
      color: white;
      position: absolute;
      top: 0.5rem;
      left: 0.3rem;
    }
    .title {
      color: white;
      font-size: 0.5rem;
      position: absolute;
      top: 0.5rem;
      left: 1rem;
    }
  }
}
</style>