interface IGroup {
  (todayLearned: string): string;
  perfomanceTime: number;
  perfomanceLocation(location: string): void;
}
function myGroup(): IGroup {
  let group = function (todayLearned: string) {
    return todayLearned;
  } as IGroup;
  group.perfomanceTime = 20000;
  group.perfomanceLocation = function (this) {
    console.log(this.perfomanceTime + "시간 공연예정");
  };
  return group;
}
let soptKPop = myGroup();
console.log(soptKPop("LOVE DIVE"));
soptKPop.perfomanceTime = 30000;
soptKPop.perfomanceLocation("홍대");

console.log(soptKPop);
