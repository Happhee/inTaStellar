// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
var Song = /** @class */ (function () {
    function Song(artist, title, isDance) {
        this.artist = artist;
        this.title = title;
        this.isDance = isDance;
    }
    return Song;
}());
var song = new Song("IVE", "LOVE DIVE", true);
// const song = new ISong("IVE", "LOVE DIVE", true);
console.log(song);
