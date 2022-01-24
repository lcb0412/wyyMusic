<template>
  <div class="player">
    <div class="player_left" @click="mid.url ? openMusicDet() : ''">
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
        <audio id="wyyaudio" :src="mid.url" autoplay ref="wyyaudio"></audio>
      </div>
    </div>
    <div class="player_right">
      <svg
        class="icon"
        aria-hidden="true"
        @click="useChangeAduioPlay(mid,musicplay)"
        v-if="!musicplay.val.isplaying"
      >
        <use xlink:href="#icon-bofang-copy"></use>
      </svg>
      <svg
        class="icon"
        aria-hidden="true"
        @click="useChangeAduioPlay(mid,musicplay)"
        v-if="musicplay.val.isplaying"
      >
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="userNextMusic(musicplay)">
        <use xlink:href="#icon-youfanye"></use>
      </svg>
    </div>
  </div>
  <musicDetail
    :selectMusicDet="selectMusicDet"
    :audioref="wyyaudio"
  ></musicDetail>
</template>


<script>
import { inject, reactive, onUpdated, onMounted, watch, ref } from "vue";
import { userGetMusic } from "../hooks/userGetMusic";
import { userNextMusic } from "../hooks/userNextMusic";
import { autoNextMusic } from "../hooks/userNextMusic";
import { useChangeAduioPlay } from "../hooks/useChangeAduioPlay";
import { useWatchPLayStatus } from "../hooks/useWatchPLayStatus";
import musicDetail from "./musicDetail.vue";
export default {
  components: {
    musicDetail,
  },
  setup(props, {emit}) {
    //引入全局变量musicplay
    const musicplay = inject("musicplay");
    
    //获取Dmo节点-播放器audio
    const wyyaudio = ref(null);
    
    //音乐url
    let mid = reactive({url: "",});
    
    ////获取音乐url,切换播放状态
    userGetMusic(mid,musicplay)
    
    //是否点击进入音乐详情页
    let selectMusicDet = reactive({flag: false,isplay: musicplay.isplaying,});
    
    //点击播放按钮时变更状态
    // useChangeAduioPlay(mid,musicplay)
    
    //自动播放下一曲
    autoNextMusic(wyyaudio,musicplay)
    
    //监听播放
    useWatchPLayStatus(mid,musicplay,wyyaudio)
    

    return {
      musicplay,
      mid,
      selectMusicDet,
      wyyaudio,
      userGetMusic,
      userNextMusic,
      autoNextMusic,
      useChangeAduioPlay,
      useWatchPLayStatus,

    };
  },

  methods: {
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

