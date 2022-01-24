export  function useLastMuisc(musicplay){
    if (musicplay.val.index > 0 ) {
        musicplay.updata("index", musicplay.val.index - 1);
       console.log("上一首", musicplay.val.List[musicplay.val.index].id);
       musicplay.updata("id", musicplay.val.List[musicplay.val.index].id);
       musicplay.updata("uname", musicplay.val.List[musicplay.val.index].name);
       musicplay.updata(
         "imgurl",
         musicplay.val.List[musicplay.val.index].al.picUrl
       );
       //设置了自动播放-获取歌曲状态更改为播放
       musicplay.isplaying = true;
     } else {
       console.log("当前歌单暂无上一首");
     }
}