const coordinate = { x: 1, y: 12 };
const id = { name: "line" };
const namedCoordinate = {};



Object.assign(namedCoordinate, coordinate, id);
namedCoordinate.name;