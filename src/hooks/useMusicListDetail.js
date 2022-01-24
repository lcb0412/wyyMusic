import { getMusicDetail } from "../api/index.js";
import { watch } from "vue";
export function useMusicListDetail(musicplay,moreList){
    //获取播放列表详情
    watch(
        () => musicplay,
        (v1, v2) => {
          let mapLi = musicplay.val;
          for (let i = 0; i < mapLi.List.trackIds?.length; i++) {
             getMusicDetail(mapLi.List.trackIds[i].id).then((res) => {
              // console.log('rr',res.data)
              moreList.List[i] = res.data.songs[0];
            });
          }
          musicplay.updata("List",moreList.List)
          // console.log('new',musicplay)
        },
        {
          deep: true, // 深度监听的参数
        }
      );
}