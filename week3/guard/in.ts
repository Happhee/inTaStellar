interface Top {
    top: string;
}

interface Bottom {
    bottom: string;
}
function isTop(kind: any ): kind is Top {
    return kind.top !== undefined;
}
function dressUp(kind: Top | Bottom) {
    if (isTop(kind)) {
        console.log(kind.top);
    } else {
        console.log(kind.bottom);
    }
}
dressUp({top : "셔츠"})			// 셔츠
dressUp({bottom : "치마"})		// 치마