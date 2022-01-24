<template>
  <div class="playlist" id="plist">
    <div class="playlist_nav" id="pltop">
      <div class="nav_left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinle"></use>
        </svg>
        <div class="tips">
          播放全部
          <span>（共{{moreList?.List.length }}首）</span>
        </div>
      </div>
      <div class="nav_right" v-if="msg?.detail.subscribedCount">+ 收藏 （
        {{ msg?.detail.subscribedCount?formatNum(msg.detail.subscribedCount):0 }}
        ）</div>
    </div>
    <div class="playlist_content">
      <div
        class="list_block"
        v-for="(item, index) in moreList?.List"
        @click="useChangeMusic(index,musicplay)"
      >
        <div class="listblock_left">
          <div class="blockdid">
            {{ index + 1 }}
          </div>

          <div class="lefttitle">
            {{ item?.name }}
            <div  style="color: red">
              <span v-for="(nitem, nindex) in item?.ar" style="font-size:0.2rem;">
                {{ nitem.name }} &nbsp;&nbsp; 
              </span>
                {{ item?.alia[0]?'-'+item?.alia[0]:"" }}
            </div>
            <!-- <div v-if="!item?.alia[0]" style="color: red">
              {{ item?.ar[0].name }}
            </div> -->
          </div>
        </div>
        <div class="listblock_right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang-copy"></use>
          </svg>
        </div>
      </div>
    </div>

    <!-- <a class="totopbotton" href="#" @click="location.href='#pltop'">
      Top
    </a> -->
  </div>
</template>

<script>
import { inject, reactive } from "vue";
import { useChangeMusic } from "../hooks/useChangeMusic"
import { useMusicListDetail } from "../hooks/useMusicListDetail"
import formatNum from  '../tools/formatNum.js';
export default {
  props: ["msg"],
  setup() {
    const musicplay = inject("musicplay");
    let moreList = reactive({ List: [],
    });
    useMusicListDetail(musicplay,moreList)
    

    return {
      musicplay,
      moreList,
      useChangeMusic,
      useMusicListDetail,
      formatNum,
    };
  },
};
</script>

<style lang="less" scoped>
.playlist {
  width: 7.5rem;
  padding: 0.3rem;
  box-sizing: border-box;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  background: white;
  margin: 0.3rem auto 1rem;
  .playlist_nav {
    display: flex;
    justify-content: space-between;
    height: 0.6rem;
    align-items: center;
    .nav_left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.2rem;
      }
      .tips {
        font-size: 0.3rem;
        span {
          font-size: 0.2rem;
        }
      }
    }
    .nav_right {
      font-size: 0.2rem;
      background: crimson;
      border-radius: 0.5rem;
      color: white;
      width: 2.4rem;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
    }
  }
  .playlist_content {
    margin-top: 0.3rem;
    .list_block {
      font-size: 0.3rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.2rem;
      .listblock_left {
        display: flex;
        align-items: center;
        font-size: 0.35rem;
        .blockdid {
          text-align: center;
          width: 0.5rem;
        }
        .lefttitle {
          margin-left: 0.4rem;
          font-size: 0.3rem;          
          white-space: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          word-break: break-all;

          div {
            margin-top: 0.1rem;
            font-size: 0.12rem;
          }
        }
      }
      .listblock_right {
        .icon {
          width: 0.5rem;
          height: 0.5rem;
          margin: 0 0.2rem;
        }
      }
    }
  }
  .totopbotton{
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    display: block;
    background:crimson;
    border-radius: 50%;
    position: fixed;
    right: 0.6rem;
    font-size: 0.25rem;
    color: white;
    top: 70%;
    text-decoration: none;
  }
}
</style>