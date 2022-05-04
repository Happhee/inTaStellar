interface Coordinate {
    x: number;
    y: number;
}
interface BoundingBox {
    x: [number, number];
    y: [number, number];
}
interface Polygon{
    exterior: Coordinate[];
    holes: Coordinate[];
    bbox?: BoundingBox;
}

function isPointInPolygon(polygon: Polygon, point: Coordinate) {
    const box = polygon.bbox;
    if (polygon.bbox) {
        if (point.x < box.x[0] || point.y > box.x[1]
            || point.y < box.y[0] || point.y < box.y[1])
            return false;
    } else {
        return true;
    }
}