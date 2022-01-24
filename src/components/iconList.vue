<template>
    <div class="iconlist">
        <div class="listitem" @click="getTagMusic(7)">
            <img src="../assets/img/huayu.png" alt="" class="newmusictag">
            <span>
                新歌速递-华语
            </span>
        </div>
        <div class="listitem" @click="getTagMusic(96)">
            <img src="../assets/img/oumei.png" alt="" class="newmusictag">
            <span>
               新歌速递-欧美
            </span>
        </div>
        <div class="listitem" @click="getTagMusic(8)">
            <img src="../assets/img/riben.png" alt="" class="newmusictag">
            <span>
               新歌速递-日本
            </span>
        </div>
        <div class="listitem" @click="getTagMusic(16)" >
            <img src="../assets/img/hanguo.png" alt="" class="newmusictag">
            <span>
                新歌速递-韩国
            </span>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    setup() {
        const router = useRouter()
        function getTagMusic(type){
            router.push({path:'/tagMusicDet',query:{type:type}})
        }
        return {getTagMusic}
    }
}
</script>

<style scoped lang="less">
     .iconlist{
        box-sizing: border-box;
        width: 7.5rem;
        height: 2rem;
        padding: 0  0.2rem;
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        .listitem{
            width: 1.6rem;
           text-align: center;
            .icon{
                width: 0.8rem;
                height: 0.8rem;
            }
            .newmusictag{
                 width: 1.6rem;
                height: 1.6rem;
            }
            span{
                font-size: 0.2rem;
            }
        }
    }
</style>

