<template>
  <div class="player">
    <div class="player_left" @click="mid.url?openMusicDet():''">
      <img
        :src="musicplay.val.imgurl"
        alt=""
        class="detail_logo"
        v-if="musicplay.val.imgurl"
      />
      <div class="detail_logo" v-if="!musicplay.val.imgurl"></div>
      <div class="left_detail">
        <div class="detail_title" v-if="musicplay.val.uname">
          {{ musicplay.val.uname }}
        </div>
        <div class="detail_title" v-if="!musicplay.val.uname">未播放音乐</div>
        <div class="detail_tips">横滑可以切换上下首喔</div>
        <audio id="wyyaudio" :src="mid.url" autoplay></audio>
      </div>
    </div>
    <div class="player_right">
      <svg
        class="icon"
        aria-hidden="true"
        @click="changeAduioPlay"
        v-if="!musicplay.val.isplaying"
      >
        <use xlink:href="#icon-bofang-copy"></use>
      </svg>
      <svg
        class="icon"
        aria-hidden="true"
        @click="changeAduioPlay"
        v-if="musicplay.val.isplaying"
      >
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="nextMusic">
        <use xlink:href="#icon-youfanye"></use>
      </svg>
    </div>
  </div>
  <musicDetail :selectMusicDet="selectMusicDet"></musicDetail>
</template>


<script>
import { inject, reactive, onUpdated, onMounted, watch, ref } from "vue";
import { getMusic } from "../api/index.js";
import musicDetail from "./musicDetail.vue";
export default {
  components: {
    musicDetail,
  },
  emits: ["isplaying"],
  setup(props, context) {
    const musicplay = inject("musicplay");
    let mid = reactive({
      url: "",
    });
    let selectMusicDet = reactive({
      flag: false,
      isplay: musicplay.isplaying,
    });
    let flag = ref(true);
    async function getMusicUrl() {
      // console.log(musicplay.val.id);
      await getMusic(musicplay.val.id).then((res) => {
        // console.log(res.data)
        mid.url = res.data.data[0].url;
      });
      console.log("第" + musicplay.val.index + "首");
    }
    function nextMusic() {
      musicplay.updata("index", musicplay.val.index + 1);
      if (musicplay.val.List[musicplay.val.index]) {
        console.log("下一首", musicplay.val.List[musicplay.val.index].id);
        musicplay.updata("id", musicplay.val.List[musicplay.val.index].id);
        musicplay.updata("uname", musicplay.val.List[musicplay.val.index].name);
        musicplay.updata(
          "imgurl",
          musicplay.val.List[musicplay.val.index].al.picUrl
        );
        //设置了自动播放-获取歌曲状态更改为播放
        musicplay.isplaying = true;
      } else {
        console.log("歌单播放完毕");
      }
    }

    function lastMusic() {    
      if (musicplay.val.index > 0 ) {
         musicplay.updata("index", musicplay.val.index - 1);
        console.log("上一首", musicplay.val.List[musicplay.val.index].id);
        musicplay.updata("id", musicplay.val.List[musicplay.val.index].id);
        musicplay.updata("uname", musicplay.val.List[musicplay.val.index].name);
        musicplay.updata(
          "imgurl",
          musicplay.val.List[musicplay.val.index].al.picUrl
        );
        //设置了自动播放-获取歌曲状态更改为播放
        musicplay.isplaying = true;
      } else {
        console.log("当前歌单暂无上一首");
      }
    }

    function getCurTime(){
      // console.log(document.getElementById("wyyaudio").currentTime)
      let restime = document.getElementById("wyyaudio").currentTime 
      musicplay.curtime = restime
      // console.log(musicplay.curtime)
    }


    onUpdated(() => {
      if (flag) {
        //设置了自动播放-获取歌曲状态更改为播放
        musicplay.isplaying = true;
        flag = false;
      }
      getMusicUrl();
    });

    onMounted(() => {
      var audio = document.getElementById("wyyaudio");
      //循环播放
      //audio.loop = true;
      //禁用循环播放
      audio.loop = false;
      //定义ended时调用的方法
      var next = function () {
        setTimeout(() => {
          console.log("播放结束");
          nextMusic();
        }, 1000);
      };
      //为播放器添加一个ended事件，即播放结束时调用next
      audio.addEventListener("ended", next, false);
    });

    // 监听播放器中音乐地址的变化，即更换音乐时，监听播放状态同时更改播放按钮状态
    watch(mid, (newVal, oldVal) => {
      context.emit("isplaying", musicplay.isplaying);
    });
    //监听播放状态，播放/暂停音乐
    watch(
      () => musicplay,
      (v1, v2) => {
        // console.log("controler播放状态改变为", v1.val.isplaying);
        if (v1.val.isplaying) {
          document.getElementById("wyyaudio").play();
        } else {
          document.getElementById("wyyaudio").pause();
        }  
        context.emit("isplaying", v1.val.isplaying);
      },
      {
        deep: true, // 深度监听的参数
      }
    );

    return {
      musicplay,
      mid,
      selectMusicDet,
      flag,
      getMusicUrl,
      nextMusic,
      lastMusic,
      getCurTime,
    };
  },

  methods: {
    changeAduioPlay() {
      if (this.mid.url) {
        if (this.musicplay.val.isplaying) {
          this.musicplay.val.isplaying = false;
          this.$emit("isplaying", this.musicplay.val.isplaying);
        } else {
          this.musicplay.val.isplaying = true;
          this.$emit("isplaying", this.musicplay.val.isplaying);
        }
      } else {
        alert("请选择音乐播放");
      }
    },
    openMusicDet() {
      this.selectMusicDet.flag = true;
    },
  },
};
</script>


<style lang="less" scoped>
* {
  text-decoration: none;
  color: black;
}
.player {
  box-sizing: border-box;
  padding: 0.3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 7.5rem;
  height: 1.2rem;
  margin: 0 auto;
  z-index: 999;
  border-top: 1px solid gainsboro;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .player_left {
    display: flex;
    align-items: center;
    .detail_logo {
      width: 0.8rem;
      height: 0.8rem;
      background: skyblue;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .left_detail {
      .detail_title {
        margin-right: 0.2rem;
        font-size: 0.2rem;
      }
      .detail_tips {
        font-size: 0.15rem;
      }
    }
    audio {
      width: 4.5rem;
      display: block;
      height: 0.5rem;
    }
  }
  .player_right {
    display: flex;
    align-items: center;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.1rem;
    }
  }
}
</style>

