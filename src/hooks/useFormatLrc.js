import { getlyric } from "../api/index.js";
import { watch } from "vue";
export function useFormatLrc(musicplay,lrc){
    watch(
        () => musicplay.val.id,
        (v1, v2) => {
          getlyric(v1).then((res) => {
            console.log(res);
            lrc.val = res.data.lrc.lyric;
            var newlrc = lrc.val.split(/[(\r\n)\r\n]+/);
            //歌词内容,歌词时间进行清零
            lrc.val = [];
            lrc.timeList = [];
            for (var i = 0; i < newlrc.length; i++) {
              let map = newlrc[i].split(/\[|\]/);
              //在歌词时间数组长度内
              if (map[1]) { 
                //数组中包含时间，即正确格式的数组才进行赋值       
                lrc.val.push(map);
                //获取分钟数
                let m = Number(map[1].split(":")[0]) * 60;
                // 获取一个秒数s+毫秒数ms的数组
                let s = map[1].split(":")[1].split(".");
                //获取秒数
                let ms = Number(s[0]) + Number(s[1]) / 1000;
                let time = m + ms;
                lrc.timeList.push(time);
              }
            }
          });
        },
        { deep: true, }
      );
}