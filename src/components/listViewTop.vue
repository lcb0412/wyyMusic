<template>
  <div class="listViewTop">
    <div class="bg"><img :src="msg.detail.coverImgUrl"  /></div>
    <div class="viewtop_left">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhuibai"></use>
        </svg>
      </router-link>
      <div class="text">歌单</div>
    </div>
    <div class="viewtop_right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhuanfa"></use>
      </svg>
    </div>
  </div>
  <div class="listViewBody">
    <div class="viewbody_left">
      <img :src="msg.detail.coverImgUrl" />
       <span> ▷ {{ changecount(msg.detail.playCount) }}</span>
    </div>
    <div class="viewbody_right">
      <div class="bodyright_top">
        {{ msg.detail.name }}
      </div>
      <div class="bodyright_content">
        <!--msg.detail.creator?.avatarUrl
                等同于 msg.detail.creator?sg.detail.creator.avatarUrl:''
                 !-->
        <img :src="msg.detail.creator?.avatarUrl" alt="" />
        <div>
          {{ msg.detail.creator?.nickname }}
        </div>
      </div>
      <div class="bodyright_more">{{ msg.detail?.description }}</div>
    </div>
  </div>
  <div class="listViewFoot">
    <div class="footblock">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shoucang"></use>
      </svg>
      <div class="count">
          收藏<div style="font-size:0.2rem;padding:0.1rem 0;">{{ msg.detail.commentCount }}</div>
      </div>
    </div>

    <div class="footblock">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhuanfa"></use>
      </svg>
      <div class="count">
         转发<div style="font-size:0.2rem;padding:0.1rem 0;">{{ msg.detail.shareCount }}</div>
      </div>
    </div>

    <div class="footblock">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai1"></use>
      </svg>
      <div class="count">
          下载
          <div>---</div>
      </div>
    </div>

    <div class="footblock">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-duoge-gao"></use>
      </svg>
      <div class="count">
          多选
           <div>---</div>
      </div>
    </div>
  </div>
</template>

<script>
import changecount from  '../tools/formatNum.js';
export default {
  props: ["msg"],
  mounted() {
    console.log(this.msg);
    
  },
  methods:{
    changecount
  }
};
</script>



<style scoped lang="less">
.listViewTop {
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  .viewtop_left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      font-size: 0.35rem;
      padding-left: 0.1rem;
      color: white;
    }
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      display: block;
      margin-right: 0.1rem;
    }
  }
  .viewtop_right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      margin: 0 0.1rem;
    }
  }
  .bg {
    width: 7.5rem;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      transform: scale(1.1);
      filter: blur(0.4rem);
    }
  }
}
.listViewBody {
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  box-sizing: border-box;
  margin: 0 auto;
  .viewbody_left {
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.1rem;
    }
    span{
        color: white;
        font-size: 0.2rem;
        position: absolute;
        top: 0.1rem;
        right: 0.1rem;
    }
  }
  .viewbody_right {
    width: 4.5rem;
    padding: 0 0.3rem;
    .bodyright_top {
      color: white;
      font-size: 0.3rem;
      font-weight: bold;
      height: 0.8rem;
    }
    .bodyright_content {
      display: flex;
      align-items: center;
      padding: 0.25rem 0;
      color: white;
      font-size: 0.2rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
    }
    .bodyright_more {
      color: white;
      font-size: 0.17rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
.listViewFoot{
    width: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  box-sizing: border-box;
  height: 2rem;
  margin: 0 auto;
  .footblock{
      text-align: center;
      padding: 0 0.3rem;
      .icon{
          width: 0.8rem;
          height: 0.8rem;
          display: block;
      }
      .count{
        padding-top: 0.1rem;
          font-size: 0.15rem;
          color: white;
      }
  }
}
</style>