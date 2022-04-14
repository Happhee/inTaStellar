// 인터페이스의 정의
interface ISong {
  artist: string;
  title: string;
  isDance: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
class Song implements ISong {
  constructor(
    public artist: string,
    public title: string,
    public isDance: boolean
  ) {}
}

const song = new Song("IVE", "LOVE DIVE", true);

console.log(song);
