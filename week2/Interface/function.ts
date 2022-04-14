// 연습실 크기 함수 인터페이스의 정의
interface PracticeRoomFun {
  (roomWidth: number, roomHeight: number): number;
}

const practiceRoom: PracticeRoomFun = function (width: number, height: number) {
  return width * width * height;
};

console.log(practiceRoom(8, 20)); // 1280
