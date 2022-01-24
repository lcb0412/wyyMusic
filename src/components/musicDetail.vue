<template>
  <div
    class="musicDet"
    v-show="selectMusicDet.flag"
  >
    <div class="bg">
      <img :src="musicplay.val.imgurl" alt="" />
    </div>
    <div class="return" @click="returnList">
       <div>＜</div>
       <p v-if="musicplay.val.uname">{{musicplay.val.uname}} - {{musicplay.val.List[musicplay.val.index]?.ar[0].name}}</p>
    </div>
    <div :class="musicplay.val.isplaying ? 'pointer' : 'pointer_select'">
      <img src="../assets/img/Pointer.png" alt="" class="pointerlogo" />
    </div>
    <div class="black"></div>
    <div class="center" @click="clickMusic">
      <img src="../assets/img/record.png" alt="" class="centerwrapper" />
      <img
        :src="musicplay.val.imgurl"
        alt=""
        :class="[
          'centercontent',
          musicplay.val.isplaying
            ? 'selectcentercontent'
            : 'pausecentercontent',
        ]"
      />
    </div>
    <div class="lyric"  >
      <div class="picblock"  id="picblock1"></div>
      <div class="picblock" id="picblock2"></div>
      <div class="picblock" id="picblock3"></div>
      <div class="picblock" id="picblock4"></div>
      <div class="picblock" id="picblock5"></div>
    </div>
    <div class="bottomcontroler">
      <div class="playliststatus">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xunhuanbofang-wangyiicon"></use>
        </svg>
      </div>
      <div class="playlast" @click="useLastMuisc(musicplay)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyiqu-wangyiicon"></use>
        </svg>
      </div>
      <div class="statusplay" @click="clickMusic">
        <svg
          class="icon"
          aria-hidden="true"
          v-if="!musicplay.val.isplaying"
          style="width: 0.8rem; height: 0.8rem"
        >
          <use xlink:href="#icon-zanting-wangyiicon"></use>
        </svg>
        <svg
          class="icon"
          aria-hidden="true"
          v-if="musicplay.val.isplaying"
          style="width: 0.8rem; height: 0.8rem"
        >
          <use xlink:href="#icon-bofang-wangyiicon"></use>
        </svg>
      </div>
      <div class="playnext" @click="userNextMusic(musicplay)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayiqu-wangyiicon"></use>
        </svg>
      </div>
      <div class="menu">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-caidan1"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script >
import { inject, onUpdated, reactive, onMounted, watch,toRaw } from "vue";
import {userNextMusic} from "../hooks/userNextMusic"
import {useLastMuisc} from "../hooks/useLastMuisc"
import {useGetCurTime} from "../hooks/useGetCurTime"
import {useFormatLrc} from "../hooks/useFormatLrc"

export default {
  props:{
      audioref:{
        type:String
      },
      selectMusicDet:{
        type:Object
      }
  },
  setup(props) { 
    const musicplay = inject("musicplay");
    const lrc = reactive({val: "", timeList: [], });
    useFormatLrc(musicplay,lrc)
    return {
      musicplay,lrc,
      //获取歌词并格式化
      useFormatLrc,    
      //下一曲
      userNextMusic,
      //上一曲,
      useLastMuisc
    };
  },


  
  props: ["selectMusicDet","audioref"],
  methods: {
    returnList() {
      this.selectMusicDet.flag = false;
    },
    clickMusic() {
      this.musicplay.val.isplaying = !this.musicplay.val.isplaying;
      // this.musicplay.updata('isplaying',!this.musicplay.val.isplaying)
      console.log("播放状态改变为", this.musicplay.val.isplaying);
    },

  },

  mounted() {
    setInterval(() => {
      useGetCurTime(this.audioref,this.musicplay);
      // console.log(this.musicplay.curtime)
      for (var i = 0; i < this.lrc.timeList.length; i++) {
        //歌词大于等于5
        if (this.lrc.val.length>=5) {
          //当音乐播放器的播放时间对应上歌词的播放时间
          if (this.musicplay.curtime >= this.lrc.timeList[i] && this.musicplay.curtime < this.lrc.timeList[i + 1] &&i>1 && i<this.lrc.val.length - 2 ) {
            //当播放的歌词为中间部分的歌词,前俩行有歌词
            let pArr = [1,2,3,4,5]
            for(let f = 0;f < pArr.length ; f++){
              let p = document.getElementById(`picblock${pArr[f]}`)
              p.innerHTML = this.lrc.val[i + pArr[f] - 3][2]?this.lrc.val[i + pArr[f] - 3][2]:'...';
            }
          }
          else {           
          //播放到第一句歌词
          if (this.musicplay.curtime >= this.lrc.timeList[i] &&this.musicplay.curtime < this.lrc.timeList[i + 1] && i == 0) {
            let pArr = [3,4,5]
            for(let f = 0;f < pArr.length ; f++){
              let p = document.getElementById(`picblock${pArr[f]}`)
              p.innerHTML = this.lrc.val[i + pArr[f] - 3][2]?this.lrc.val[i + pArr[f] - 3][2]:'...';
            }
          }
          //播放到第二句歌词
           if (this.musicplay.curtime >= this.lrc.timeList[i] &&this.musicplay.curtime < this.lrc.timeList[i + 1] &&i == 1) {
            let pArr = [3,4,5]
            for(let f = 0;f < pArr.length ; f++){
              let p = document.getElementById(`picblock${pArr[f]}`)
              p.innerHTML = this.lrc.val[i + pArr[f] - 3][2]?this.lrc.val[i + pArr[f] - 3][2]:'...';
            }          
          }
          //播放到倒数第二句歌词，清空最后一个block
          if (this.musicplay.curtime >= this.lrc.timeList[i] &&this.musicplay.curtime < this.lrc.timeList[i + 1] &&i == this.lrc.val.length - 2) {
            // console.log(i);
            document.getElementById("picblock3").innerHTML = this.lrc.val[i][2]?this.lrc.val[i][2]:'...';
            document.getElementById("picblock4").innerHTML =this.lrc.val[i + 1][2]?this.lrc.val[i + 1][2]:'...';
            document.getElementById("picblock5").innerHTML = "";
          }
           //播放到倒数第一句歌词，清空最后两个block
          if (this.musicplay.curtime >= this.lrc.timeList[i] &&this.musicplay.curtime < this.lrc.timeList[i] + 5 &&i == this.lrc.val.length - 1) {
            // console.log(i);
            document.getElementById("picblock3").innerHTML = this.lrc.val[i][2]?this.lrc.val[i][2]:'...';
            document.getElementById("picblock4").innerHTML = "";
            document.getElementById("picblock5").innerHTML = "";
          }
        }
        }
        //歌词数组长度小于5，正常情况下为纯音乐,显示整个歌词数组
        else if(this.lrc.val.length<5){
            let pArr = [1,2,3,4,5]
            //先清空
            for(let g = 0;g < pArr.length ; g++){
              let p = document.getElementById(`picblock${pArr[g]}`)
              p.innerHTML = '';
            }
            //然后数组中有几句歌词就显示几句歌词
            for(let f = 0;f < this.lrc.val.length ; f++){
              let p = document.getElementById(`picblock${pArr[f]}`)
              p.innerHTML = this.lrc.val[pArr[f]-1][2]?this.lrc.val[pArr[f]-1][2]:'...';
            }
        }
      }
    }, 100);
  },
};
</script>

<style scoped lang="less">
.musicDet {
  width: 7.5rem;
  margin: 0 auto;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
  z-index: 999;
  transition: all 0.2s;
}

.bg {
  width: 7.5rem;
  height: 100%;
  position: fixed;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    filter: blur(0.2rem);
    transform: scale(1.1);
  }
}
.return {
  position: fixed;
  top: 0;
  // left: 0;
  z-index: 2;
  color: white;
  font-size: 0.3rem;
  line-height: 0.8rem;
  height: 0.8rem;
  width: 7.5rem;
  padding-left: 0.3rem;
  display: flex;
  align-items: center;
  p{
     display: inline-block;
     width: 100%;
     z-index: 1;
     animation: 10s wordsLoop  linear infinite normal;
    white-space: nowrap;
  }
}

.pointer {
  position: absolute;
  top: 0.7rem;
  left: 3.5rem;
  width: 1.5rem;
  height: 2.2rem;
  z-index: 1;
  transform: rotate(1deg);
  transition: all 1s;
  transform-origin: left top;
}
.pointerlogo {
  width: 100%;
  height: 100%;
}
.pointer_select {
  .pointer;
  transform: rotate(-25deg);
}
.black {
  width: 7.5rem;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
}
.center {
  width: 6rem;
  height: 6rem;
  position: absolute;
  border-radius: 50%;
  top: 1.9rem;
  left: 1rem;
}
.centerwrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.centercontent {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  box-shadow: 0 0 0.1rem 0.1rem gray;
}
//旋转
@keyframes routateCd {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
//跑马灯
@keyframes wordsLoop {
  0% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(150%);
  }
}
.selectcentercontent {
  .centercontent;
  animation: routateCd 60s linear infinite;
  // animation-delay: 1s;
  -webkit-animation-play-state: running;
  animation-play-state: running;
}
.pausecentercontent {
  .centercontent;
  animation: routateCd 60s linear infinite;
  // animation-delay: 1s;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}


.lyric {
  position: absolute;
  top: 8rem;
  color: white;
  height: 5.5rem;
  overflow: hidden;
  text-align: center;
  line-height: 0.6rem;
  overflow-y: scroll;
  width: 7.5rem;
}

#picblock3 {
  color: rgb(0, 191, 255);
  font-size: 0.4rem;
  line-height: 1rem;
  font-weight: bold;
  border-radius: 0.3rem;
  background: rgba(0, 0, 0, 0.1);
}

.bottomcontroler {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  // left: 0;
  width: 7.5rem;
  margin: 0.3rem auto;
  .icon {
    width: 0.5rem;
    height: 0.5rem;
  }
}
</style>