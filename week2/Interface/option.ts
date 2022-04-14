interface Dance {
  artist: string;
  title?: string;
}

function 춤추자(dance: Dance): void {
  console.log(`오늘 춤출 곡은 ${dance.artist}의 ${dance.title}입니댜 💃 `);
}

let dancer = { artist: "IVE" };
춤추자(dancer);
//오늘 춤출 곡은 IVE의 undefined입니댜 💃
