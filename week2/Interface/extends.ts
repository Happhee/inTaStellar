interface SongInfo {
  artist: string;
  title: string;
}
interface DancerInfo extends SongInfo {
  name: string;
  age: number;
}
interface Group extends DancerInfo {
  people: number;
}

let soptKpop = {} as Group;
soptKpop.people = 20;
soptKpop.artist = "IVE";
soptKpop.title = "LOVE DIVE";
soptKpop.age = 24;
