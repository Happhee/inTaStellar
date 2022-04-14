function myGroup() {
    var group = function (todayLearned) { };
    group.perfomanceTime = 20000;
    group.perfomanceLocation = function () {
        this.perfomanceTime + "시간 공연예정";
    };
    return group;
}
var soptKPop = myGroup();
soptKPop("LOVE DIVE");
soptKPop.perfomanceTime = 30000;
soptKPop.perfomanceLocation("홍대");
console.log(soptKPop);
