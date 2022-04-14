// 인터페이스의 정의
interface ISong {
  artist: string;
  title: string;
  isDance: boolean;
  sayDance(): void;
}

class SongMethod implements ISong {
  // 인터페이스에서 정의한 프로퍼티의 구현
  constructor(
    public artist: string,
    public title: string,
    public isDance: boolean
  ) {}

  // 인터페이스에서 정의한 추상 메소드의 구현
  sayDance() {
    console.log(`오늘은 ${this.artist}의 ${this.title}을 출거야 💃`);
  }
}

function danceInfo(song: ISong): void {
  song.sayDance();
}

const todaySong = new SongMethod("IVE", "LOVE DIVE", true);
danceInfo(todaySong);
