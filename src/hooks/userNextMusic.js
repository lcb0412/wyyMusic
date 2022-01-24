import { onMounted } from "vue";
//获取下一曲
export  function userNextMusic(musicplay){
    musicplay.updata("index", musicplay.val.index + 1);
      if (musicplay.val.List[musicplay.val.index]) {
        console.log("下一首", musicplay.val.List[musicplay.val.index].id);
        musicplay.updata("id", musicplay.val.List[musicplay.val.index].id);
        musicplay.updata("uname", musicplay.val.List[musicplay.val.index].name);
        musicplay.updata(
          "imgurl",
          musicplay.val.List[musicplay.val.index].al.picUrl
        );
        //设置了自动播放-获取歌曲状态更改为播放
         musicplay.isplaying = true;
      } else {
        console.log("歌单播放完毕");
      }
}

//自动播放下一曲
export  function autoNextMusic(wyyaudio,musicplay){
  onMounted(() => {
    //循环播放
    //audio.loop = true;
    //禁用循环播放
    wyyaudio.value.loop = false;
    //定义ended时调用的方法
    var next = function () {
      console.log("播放结束");
      userNextMusic(musicplay);   
    };
    //为播放器添加一个ended事件，即播放结束时调用next
    wyyaudio.value.addEventListener("ended", next, false);
  });
}