<template>
  <div class="musiclist">
    <div class="list_top">
      <div class="top_left">发现好歌单</div>
      <div class="top_right" >
        <!-- <router-link to="/toListDet" class="link">查看更多</router-link> -->
        <div class="link">查看更多</div>
      </div>
    </div>

    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <router-link :to="{path:'/toListDet',query:{id:item.id}}"
          class="swiper-slide"
          v-for="(item, index) in musicArr.value"
          :key="index"
        >
          <img :src="item.picUrl" :alt="item.name" />
          <div>{{ item.name }}</div>
          <span> ▷ {{ formatNum(item.playCount) }}</span>
        </router-link>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Swiper from "swiper";
import { getPersonalized } from "@/api/index.js";
import { reactive, onUpdated, onMounted } from "vue";
import formatNum from  '../tools/formatNum.js';
export default {
  setup() {
    let musicArr = reactive([{}]);
    onMounted(async () => {
      let res =  await getPersonalized(30)
      musicArr.value = res.data.result;
      console.log("res",res);
    });
    onUpdated(() => {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
      });
    });
    return {
      musicArr,formatNum
    };
  },
};
</script>

<style scoped lang="less">
.musiclist {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  width: 7.5rem;
  padding: 0.3rem;
  overflow: hidden;
  .list_top {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .top_left {
      font-weight: bold;
    }
    .top_right {
      font-size: 0.15rem;
      border: 1px solid rgb(221, 218, 218);
      border-radius: 0.12rem;
      padding: 0.05rem 0.15rem;
      display: flex;
      align-items: center;
      .link{
        text-decoration: none;
        color: black;
        font-size: 0.2rem;
      }
    }
  }
  .swiper {
    width: 7rem;
    height: 3rem;
    .swiper-slide {
      padding-top: 0.3rem;
      background: #fff;
      position: relative;
      text-decoration: none;
      color: black;
      img {
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 0.15rem;
      }
      div {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 0.18rem;
      }
      span {
        position: absolute;
        top: 0.4rem;
        color: white;
        right: 0.2rem;
        font-size: 0.2rem;
      }
    }
  }
}
</style>