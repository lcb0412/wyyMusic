import { watch } from "vue";
export function useWatchPLayStatus(mid, musicplay, wyyaudio) {
    // 监听播放器中音乐地址的变化，即更换音乐时，监听播放状态同时更改播放按钮状态
    watch(mid, (newVal, oldVal) => {
        musicplay.updata("isplaying", musicplay.isplaying)
    });
    //根据播放状态，进行播放/暂停音乐
    watch(
        () => musicplay,
        (v1, v2) => {
            if (v1.val.isplaying) {
                wyyaudio.value.play();
            } else {
                wyyaudio.value.pause();
            }
            musicplay.updata("isplaying", v1.val.isplaying)
        },
        {
            deep: true, // 深度监听的参数
        }
    );
}
