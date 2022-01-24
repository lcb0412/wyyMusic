export function useChangeMusic(index,musicplay) {
    //修改底部播放器组件的名称，地址，头像等信息
    console.log(musicplay)
    musicplay.updata("index", index);
    musicplay.updata("id",musicplay.val.List[index].id)
    musicplay.updata("uname", musicplay.val.List[index].name);
    musicplay.updata("imgurl", musicplay.val.List[index].al.picUrl);
  }