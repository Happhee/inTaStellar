interface Fruits{
    friutName: string;
    color: string;
}
interface Consumer extends Fruits{
    consumer: string;
    quantity: number;
}


let person1 = {} as Consumer;
person1.consumer = "happhee";
person1.quantity = 20;			
person1.friutName = "strawberry";
person1.color = "red";

let person : Consumer = {
    consumer: "hyeeun",
    quantity: 22,
    friutName: "pear",
    color : "white"
}


