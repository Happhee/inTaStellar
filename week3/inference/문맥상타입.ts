window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);   //<- OK
  console.log(mouseEvent.kangaroo); //<- Error!
};
class Beginner{

}
class Intermediate{
    
}
class Advanced{
    
}

type Dancer =  Beginner | Intermediate| Advanced
// let dancer =  [new Beginner() ,new Intermediate(), new Advanced()]
function createDancer(): Dancer[]{
return [new Beginner(), new Intermediate(), new Advanced()]
}
