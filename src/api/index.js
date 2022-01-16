import axios from 'axios';

let baseUrl = 'https://netease-cloud-music-api-two-bice.vercel.app'
//获取轮播图的api,type资源类型默认为0
//0: pc  1: android  2: iphone   3: ipad
//get(`http://localhost:3000/banner?type=${type}`)
//(``)为可拼接字符串${}
export function getBanners(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

//获取推荐歌单
//num：获取歌单的数量
export function getPersonalized(num){
    return axios.get(`${baseUrl}/personalized?limit=${num}`)
}

//获取歌单详情
//id: 歌单id
export function getPlayList(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}


//获取音乐
//id: 音乐id
export function getMusic(id){
    return axios.get(`${baseUrl}/song/url?id=${id}`)
}


//获取音乐详情
//id: 音乐id
export function getMusicDetail(ids){
    return axios.get(`${baseUrl}/song/detail?ids=${ids}`)
}

//获取歌词详情
//id: 音乐id
export function getlyric(id){
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}

//搜索
//keywords: 关键字
///search 或者 /cloudsearch(更全)
export function cloudsearch(keywords){
    return axios.get(`${baseUrl}/cloudsearch?keywords=${keywords}`)
}
