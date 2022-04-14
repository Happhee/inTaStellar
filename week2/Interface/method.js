var SongMethod = /** @class */ (function () {
    // 인터페이스에서 정의한 프로퍼티의 구현
    function SongMethod(artist, title, isDance) {
        this.artist = artist;
        this.title = title;
        this.isDance = isDance;
    }
    // 인터페이스에서 정의한 추상 메소드의 구현
    SongMethod.prototype.sayDance = function () {
        console.log("\uC624\uB298\uC740 ".concat(this.artist, "\uC758 ").concat(this.title, "\uC744 \uCD9C\uAC70\uC57C \uD83D\uDC83"));
    };
    return SongMethod;
}());
function danceInfo(song) {
    song.sayDance();
}
var todaySong = new SongMethod("IVE", "LOVE DIVE", true);
danceInfo(todaySong);
