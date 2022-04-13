// 선언문들
function add(a: number, b: number): number;
function add(a: number, b: number): string;
function add(a: string, b: string): string;
// 구현체
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add("2", "3")); // "23"
// console.log(add("2", 3));
// 이 호출과 일치하는 오버로드가 없습니다.
