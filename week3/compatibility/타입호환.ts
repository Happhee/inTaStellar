interface IGroup {
    name: string;
}
class Dancer {
    constructor(
        name: string,
        age: number
  ) {}
   
}
let happhee: IGroup;
let ive = { name: "IVE", title: "LOVE DIVE" }
happhee = ive;

function pratice(group: IGroup) {
    console.log(`My name is ${group.name}`);
}
pratice(ive);