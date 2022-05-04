interface Top {
    top: string;
}

interface Bottom {
    bottom: string;
}
type ClothingType = Top | Bottom;
// myCloths is Top
function isTop(myClothes: ClothingType): myClothes is Top{
    return "top" in myClothes;
}
function dressUp(myClothes: ClothingType) {
    if (isTop(myClothes)) {
        console.log(`상의는 ${myClothes.top}`);
    } else {
        console.log(`하의는 ${myClothes.bottom}`);
    }
}
dressUp({top: "셔츠"})
dressUp({bottom: "치마"})