//点击播放按钮更改状态
export function useChangeAduioPlay(mid, musicplay) {
  console.log('m', mid)
  console.log('ms', musicplay)
  if (mid.url) {
    if (musicplay.val.isplaying) {
      // return musicplay.val.isplaying = false;
      musicplay.val.isplaying = false;
    } else {
      // return musicplay.val.isplaying = true;
      musicplay.val.isplaying = true;
    }
  } else {
    alert("请选择音乐播放");
  }
}


