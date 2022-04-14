var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 변수 song의 타입으로 Song 인터페이스를 선언
var song;
// 변수 song은 Song 인터페이스를 지켜야 한다.
song = { artist: "IVE", title: "LOVE DIVE", isDance: true };
var songs = [{ artist: "IVE", title: "LOVE DIVE", isDance: true }];
function addSong(song) {
    songs = __spreadArray(__spreadArray([], songs, true), [song], false);
}
var newSong = {
    artist: "RedVelet",
    title: "Feel My Rhythm",
    isDance: true
};
addSong(newSong);
console.log(songs);
