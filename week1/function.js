function profile(name, age) {
    return "My name is ".concat(name, ",  I am ").concat(age, " years old.");
}
console.log(profile("seohee", 24));
// My name is seohee,  I am 24 years old.
console.log(profile("seohee"));
// My name is seohee,  I am undefined years old.
// console.log(profile("seohee", 24, 25));
//1-2개의 인수가 필요한데 3개를 가져왔습니다.ts(2554)
