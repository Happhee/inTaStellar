class Top {
    top = "shirts";
    quantity= 12;
}

class Bottom {
    bottom = "Skirt";
    quantity = 2;
}

// function dressUp(kind: Top | Bottom) {
//       console.log(typeof kind);

//   if (kind instanceof Top) {
//     console.log(kind.top); 
//   }
//   if (kind instanceof Bottom) {
//     console.log(kind.bottom); 
//   }

//   console.log(kind.quantity); 
// }
dressUp(new Top());
/* shirts
12
*/
dressUp(new Bottom());