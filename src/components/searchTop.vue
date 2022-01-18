<template>
    <div class="searchtop">
        <div class="searchleft" @click="$router.go(-1)">
            返回
        </div>
        <div class="searchright">
            <input type="text" name="" id="" :placeholder="placeholder" v-model="searchKey" @keydown.enter="sendSeach()">
        </div>
        <div class="setsearch" @click="sendSeach()">
            搜索
        </div>
    </div>
    <div class="history">
        <div class="historytitle">
            历史
        </div>
        <div class="historyright">
            <div class="historydetail" v-for="(item,index) in keyList" :key="index" @click="this.searchKey=item">
            {{ item }}
        </div>
        </div>
        
    </div>
</template>

<script>
import {cloudsearch} from '../api/index.js'
import {inject} from 'vue'
export default {
    setup(props) {
        const musicplay = inject("musicplay");
        return{
            musicplay
        }
    },
    data() {
        return {
            placeholder:'陈奕迅',
            searchKey:'',
            keyList:[]
        }
    },
    mounted(){
        //搜索历史--将localStorage.keyList解析赋值给data
        this.keyList = localStorage.keyList ? JSON.parse(localStorage.keyList) : []
        
    },
    methods:{
        sendSeach(){
            //将输入内容添加到数组
            this.keyList.unshift(this.searchKey)
            //去重
            this.keyList= Array.from(new Set(this.keyList)) 
            //将数组转换为JSON字符串赋值到使用 localStorage 创建一个本地存储的keyList--localStorage.keyList
            localStorage.keyList = JSON.stringify(this.keyList)
            

            //搜索
            cloudsearch(this.searchKey).then((res) => {
            console.log(res.data.result.songs)
            // 将请求搜索接口得到的搜索列表通过musicplay的updata方法修改数据，为List赋值，让playList组件可以访问到musicplay.val.List.trackIds来遍历歌曲列表
            this.musicplay.updata("List", {trackIds:res.data.result.songs});
            console.log(this.musicplay.val)
      });
            
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        margin: 0 auto;
    }
    .searchtop{
        width: 7.5rem;
        display: flex;
        align-items: center;
        padding: 0.3rem;
        .searchleft{
            font-size: 0.25rem; 
            height: 0.25rem;
        }
        .searchright{
            padding-left: 0.3rem;
            input{
                width: 5rem;
                border: none;
                outline: none;
                font-size: 0.25rem; 
                padding: 0.1rem 0 0.1rem 0.3rem;
                border-bottom: 1px solid gray;
            }
           
        }
        .setsearch{
            font-size: 0.25rem;
            height: 0.25rem
        }
    }
    .history{
        .searchtop;
        padding-top: 0;
        height: 2.2rem;
        align-items: flex-start;
        .historytitle{
            font-size: 0.25rem;
            padding-right: 0.2rem;
            height: 3rem;
            width: 0.8rem;
            font-weight: bold;
        }
        .historyright{
            width: 6rem;
            height: 2.2rem;
            display: flex;
            flex-wrap: wrap;
            overflow: scroll;
        }
        .historydetail{
            font-size: 0.25rem;
            margin: 0.1rem;
            border-radius: 0.3rem;
            background: rgb(236, 236, 236);
            padding: 0.1rem 0.2rem;
            height: 0.6rem;
            
        }
    }    
</style>