type Fruit<T> = {
    name: T,
    color: T,
    quantity : number
}
let mylike: Fruit<string> = {
    name: "strawberry",
    color: "red",
    quantity : 12
}
// mylike = {
//     name: "orange",
//     color : 3
// }