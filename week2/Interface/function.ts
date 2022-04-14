// 함수 인터페이스의 정의
interface PracticeRoomFun {
  (roomWidth: number, roomHeight: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const practiceRoom: PracticeRoomFun = function (width: number, height: number) {
  return width * width * height;
};

console.log(practiceRoom(8, 20)); // 1280
