// 변수
interface IDance {
  artist: string;
  title: string;
}

function 춤추자(dance: IDance): void {
  console.log(`오늘 춤출 곡은 ${dance.artist}의 ${dance.title}입니댜 💃 `);
}

const dance = { artist: "IVE", title: "LOVE DIVE", isDance: false };
춤추자(dance); //오늘 춤출 곡은 IVE의 LOVE DIVE입니댜 💃

// 클래스
interface ICheer {
  cheer(): void;
}

class SeoheeCheer implements ICheer {
  cheer() {
    console.log("서히 체고");
  }
}

class ClappingCheer {
  cheer() {
    console.log("Clap, clap, clap, clap, clap clap clap!");
  }
}

function makeCheer(cheer: ICheer): void {
  cheer.cheer();
}

makeCheer(new SeoheeCheer()); // 서히 체고
makeCheer(new ClappingCheer()); // Clap, clap, clap, clap, clap clap clap!
