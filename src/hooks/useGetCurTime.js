//获取播放器歌曲已播放的时间
export  function useGetCurTime(element,musicplay){
    // console.log('eee',element)
    let restime = element.currentTime 
    musicplay.curtime = restime
}