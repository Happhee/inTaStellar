class Fruit{
    info: string;
    constructor(color: string, size: string) {
        this.info = color;
    }
}
class Vegetable {
    info: string;
    static color: string;

    constructor(size: string) {
        this.info = size;
    }
}
let apple= new Fruit("red", "mideum");
let paprika = new Vegetable("small");

paprika = apple;

console.log(apple, paprika)