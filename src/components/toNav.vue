<template>
    <div class="nav">
        <div class="nav_left">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caidan2"></use>
            </svg>
        </div>
        <div class="nav_content">
            <router-link :class="['nav_block',selectNav==0?'active':'']" :to="{path:'/'}" @click="selectNav=0">我的</router-link>
            <router-link :class="['nav_block',selectNav==1?'active':'']" :to="{path:'/'}" @click="selectNav=1" >发现</router-link>
            <router-link :class="['nav_block',selectNav==2?'active':'']" :to="{path:'/'}" @click="selectNav=2" >云村</router-link>
            <router-link :class="['nav_block',selectNav==3?'active':'']" :to="{path:'/'}" @click="selectNav=3">视频</router-link>
        </div>
        <div class="nav_right"  @click="$router.push('/searchView')">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
        
    </div>
</template>

<style scoped lang="less">
    .nav{
        width: 7.5rem;
        height: 1rem;
         padding: 0 0.30rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
            display: block;
            width: 0.50rem;
            height: 0.50rem;
        }
    }

    .nav_content{
        width: 5rem;
         display: flex;
         justify-content: space-between;
         align-items: center;
         .active{
             font-weight: 900;
         }
         .nav_block{
             text-decoration: none;
             color: black;
         }    
         
    }

    
</style>


<script>
export default {
    data() {
        return {
            selectNav:1
        }
    },
}
</script>