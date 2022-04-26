interface EmptyFruit<T> {
    data: T;
}
let strawberry: EmptyFruit<number> = { data : 12};
let orange: EmptyFruit<string> = {  data : "상큼해"};

// strawberry = orange;  