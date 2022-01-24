// import { getMusic } from "../api/index.js";

// export  async  function userGetMusic(id){  
//     let url=''
//     await getMusic(id).then((res) => {    
//         //部分情况下获取的音乐url为空
//         if(!res.data.data[0].url&&id!=0){         
//             url = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
//         }
//         else{         
//             url = res.data.data[0].url;
//         }
//     })
//     console.log('uu',url)
//     return url
    
// }


import { getMusic } from "../api/index.js";
import { onUpdated } from "vue";
export   function userGetMusic(mid,musicplay){  
    async function GetMusic(id){
        let url=''
        await getMusic(id).then((res) => {   
            //部分情况下获取的音乐url为空
            if(!res.data.data[0].url&&id!=0){         
                url = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
            }
            else{         
                url = res.data.data[0].url;
            }
        })
        console.log(url)
        return url
    }

    
    onUpdated(() => {      
        //获取音乐url,切换播放状态
        GetMusic(musicplay.val.id).then((res) => {
            mid.url = res;
            if(!mid.url){musicplay.isplaying=false}else{
                musicplay.isplaying=true
            }
        });       
      });
    
}

