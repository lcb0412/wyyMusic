<template>
  <div class="swiper-container" v-if="imgs.length">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
        <img :src="item.pic" alt="" srcset=""  />
      </div>
      <!-- <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" ></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
// import style (<= Swiper 5.x)
//引入swiper(<= Swiper 5.x)依赖
import "swiper/css/swiper.css";
//引入swiper依赖
import Swiper from "swiper";
// import axios from 'axios';
import { getBanners } from '@/api/index.js';

export default {
  data() {
    return {
      imgs: [
        {
          pic: ''
        }
      ],
    };
  },
    //async 异步
   async mounted() {
    //配置swiper
    var mySwiper = new Swiper(".swiper-container", {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      observer:true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      //   navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      //   },

      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });


    //  axios.get('http://localhost:3000/banner?type=1').then((res)=>{
    //     console.log(res)
    //     this.imgs=res.data.banners
    //     console.log(this.imgs)
    // })
    // let res=await axios.get('http://localhost:3000/banner?type=1')
    let res=await getBanners(1)
    this.imgs=[]
    this.imgs=res.data.banners
    //将图片url转换为https
    for(let i =0;i<this.imgs.length;i++){
      this.imgs[i].pic=this.imgs[i].pic.replace("http","https")
      // console.log(this.imgs[i].pic)
    }
    console.log(this.imgs)
  },
};
</script>

<style  lang="less">
* {
//   padding: 0;
//   margin: 0;
  box-sizing: border-box;
}
.swiper-container {
  width: 7.1rem;
  height: 2.75rem;
  margin: 0.3rem auto;
  .swiper-slide {
    background: skyblue;
    text-align: center;
    overflow: hidden;
    border-radius: 0.1rem;
    img{
        width: 100%;
    }
  }
}
.swiper-pagination-bullet-active{
    width: 0.05rem;
    height: 0.05rem;
    background: skyblue;
    opacity: 0.5;
}
    
    
</style>