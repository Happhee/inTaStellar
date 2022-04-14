function 춤추자(dance) {
    console.log("\uC624\uB298 \uCDA4\uCD9C \uACE1\uC740 ".concat(dance.artist, "\uC758 ").concat(dance.title, "\uC785\uB2C8\uB31C \uD83D\uDC83 "));
}
var dance = { artist: "IVE", title: "LOVE DIVE", isDance: false };
춤추자(dance); //오늘 춤출 곡은 IVE의 LOVE DIVE입니댜 💃
var SeoheeCheer = /** @class */ (function () {
    function SeoheeCheer() {
    }
    SeoheeCheer.prototype.cheer = function () {
        console.log("서히 체고");
    };
    return SeoheeCheer;
}());
var ClappingCheer = /** @class */ (function () {
    function ClappingCheer() {
    }
    ClappingCheer.prototype.cheer = function () {
        console.log("Clap, clap, clap, clap, clap clap clap!");
    };
    return ClappingCheer;
}());
function makeCheer(cheer) {
    cheer.cheer();
}
makeCheer(new SeoheeCheer());
makeCheer(new ClappingCheer());
